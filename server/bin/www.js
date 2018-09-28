let app = require("./app")
let debug = require("debug")("server:server")
let http = require("http")

//根据开发环境获取端口并存入Express
let port = normalizePort(process.env.PORT || '4000')
app.set('port',port)

//创建一个http服务
let server = http.createServer(app)

//监听端口
server.listen(port)
server.on("error",onError)
server.on("listening",onListening)
console.log("Express服务器监听4000端口");

function normalizePort(val) {
  let port = parseInt(val,10)
  if(isNaN(port)){
    return val
  }
  if(port>=0){
    return port
  }

  return false;
}

function onError(error) {
  if(error.syscall !== 'listen'){
    throw error
  }
  let bind =typeof port ==='string'
  ? 'Pipe'+port
  : 'Port'+port
  switch (error.code){
    case 'EACCES':
      console.error(bind+ ' requires elevated privileges');
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break;
    default:
      throw error
  }

}

function onListening() {
  var addr = server.address()
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  debug('Listening on ' + bind)
}
