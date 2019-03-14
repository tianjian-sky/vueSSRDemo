const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()
const createApp = require('./server-entry').default

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