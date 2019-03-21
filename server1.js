const server = require('express')()
const path = require('path')
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync(path.join(__dirname, './src/template/index_ssr.html'), 'utf-8')
})

const createApp = require(path.join(__dirname, './dist/vueSSR/serverEntry.1245ffa10e859f5b6fde')).default

server.get('*', (req, res) => {
  console.log(2, createApp)
  const app = createApp()
  const context = {url: req.url}
  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
  })
})

server.listen(8080)