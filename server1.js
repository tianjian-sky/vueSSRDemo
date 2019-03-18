const express = require('express')
const server = express()
server.use(express.static('dist/vueSSR', {}))

const path = require('path')
const basedir = path.join(__dirname, './dist/vueSSR/')
const clientManifest = require('./dist/vueSSR/vue-ssr-client-manifest.json')

const renderer = require('vue-server-renderer').createBundleRenderer(path.join(basedir, './vue-ssr-server-bundle.json'), {
  template: require('fs').readFileSync('./src/template/index.html', 'utf-8'),
  clientManifest
})

server.get('*', (req, res) => {
  const context = { url: req.url }
  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.error(err)
      res.status(500).end('Internal Server Error')
      return
    }
    console.log(1, context.state)
    res.end(html)
  })
})

server.listen(8080)