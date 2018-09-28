let express = require('express');
let router = express.Router();
let $sql= require("../sql/sqlMap")
let conn=require("../db/dbConnect")
router.get('/getBasic',function (req,res) {
  let sql=$sql.basic.getBasic;
  conn.query(sql,(err,result)=>{
    if(err){
      throw err
    }
    if(result){
      res.json(result)
    }
  })
})

router.post('/check',function (req,res) {
  console.log(req.body);
  let {sno, name,stclass,basic_id} =req.body;
  let sql =$sql.check.insertIntoCheck;
  conn.query(sql,[sno,name,stclass,basic_id],function (err,result) {
    if(err){
      throw err
    }
    if(result){
      res.json({success:true,message:"get information"})
    }
  })
})

router.get('/getCheck',function (req,res) {
  let sql=$sql.check.getCheck;
  conn.query(sql,function (err,result) {
    if(err){
      throw err
    }
    if(result){
      res.json(result)
    }
  })
})
module.exports = router
