const server = require('express')()
var path = require('path')
const renderer = require('vue-server-renderer').createBundleRenderer(path.join(__dirname, './dist/vueSSR/vue-ssr-server-bundle.json'), {
  template: require('fs').readFileSync('./src/template/index.html', 'utf-8')
})

server.get('*', (req, res) => {
  const context = { url: req.url }
  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.error(err)
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
  })
})

server.listen(8080)