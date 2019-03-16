const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()
const path = require('path')
const createApp = require(path.join(__dirname, './dist/vueSSR/serverEntry.2a511521d70a884c59fa')).default

server.get('*', (req, res) => {
  console.log(2, createApp)
  const app = createApp()
  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
  })
})

server.listen(8080)