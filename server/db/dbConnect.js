let mysql =require('mysql');
let sqlConfig=require('./db');
let conn=mysql.createConnection(sqlConfig);
conn.connect((err)=>{
  if(err){
    console.error('Error Connecting'+err.stack);
    return;
  }
  console.log("mysql Connecting Success,Connect ID:"+conn.threadId);
});
module.exports=conn;
