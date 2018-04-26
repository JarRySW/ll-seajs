const koa = require('koa')
const fs = require('fs')
const path = require('path')

const app = new koa()

app.use((ctx) => {
  if (ctx.request.path === '/') {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream(path.resolve(__dirname, '../demo/index.html'))
  } else if (ctx.request.path === '/event.js') {
    ctx.response.type = 'javascript'
    ctx.response.body = fs.createReadStream(path.resolve(__dirname, '../event.js'))
  } else if (ctx.request.path === '/require.js') {
    ctx.response.type = 'javascript'
    ctx.response.body = fs.createReadStream(path.resolve(__dirname, '../require.js'))
  } else if (ctx.request.path === '/a.js') {
    ctx.response.type = 'javascript'
    ctx.response.body = fs.createReadStream(path.resolve(__dirname, '../demo/a.js'))
  } else if (ctx.request.path === '/b.js') {
    ctx.response.type = 'javascript'
    ctx.response.body = fs.createReadStream(path.resolve(__dirname, '../demo/b.js'))
  } else if (ctx.request.path === '/c.js') {
    ctx.response.type = 'javascript'
    ctx.response.body = fs.createReadStream(path.resolve(__dirname, '../demo/c.js'))
  } else if (ctx.request.path === '/d.js') {
    ctx.response.type = 'javascript'
    ctx.response.body = fs.createReadStream(path.resolve(__dirname, '../demo/d.js'))
  } else if (ctx.request.path === '/e.js') {
    ctx.response.type = 'javascript'
    ctx.response.body = fs.createReadStream(path.resolve(__dirname, '../demo/e.js'))
  }
})

app.listen(3000)
console.log('app started at port 3000...')
