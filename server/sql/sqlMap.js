let sqlMap={
  basic:{
    getBasic:'SELECT * FROM basic',
    insertIntoBasic:'INSERT INTO basic VALUES (?,?,?)'
  },
  check:{
    getCheck:'SELECT stname,stclass FROM stcheck',
    insertIntoCheck:'INSERT INTO stcheck (sno,stname,stclass,basic_id) VALUES(?,?,?,?)'
  }
}
module.exports = sqlMap
