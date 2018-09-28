
/**
 * @Description: 服务器启动模块
 * @author nbut_Mickey
 * @date 2018/9/26
*/
let express = require('express')
let createError =require('http-errors')
let path = require('path')
let cookieParser =require('cookie-parser')
let bodyParser = require('body-parser')
let app=express()
let index =require('../router/index')
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(express.static(path.join(__dirname,'../../dist')));


app.use('/',index)

//处理404,并重定向到错误页面
app.use(function (req,res,next) {
  next(createError(404))
})

//错误处理
app.use(function (err,req,res,next) {
  //设立本地,只有在开发环境中提供错误页面。
  res.locals.message=err.message
  res.locals.error=req.app.get('env') === 'development' ? err : {}

  //渲染错误页面
  res.status(err.status || 500)
  res.render('error')
})
//到处app模块
module.exports = app
