const conn = require('../db')
const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
  const district = req.query.district
  const province = req.query.province
  const type = req.query.type
  const period = req.query.period

  var sql = `SELECT DISTINCT district, province, sub_type, period FROM archaeology_tbl `
  let check=0;
  let cond=''

  if(province != ""){
    console.log('d')
    if(check==0){
   sql += `WHERE province = "${province}" `
   check=check+1;
    }
  }
  if(district != ""){
    if(check==0?cond='Where':cond='and')
      if(cond=='Where'?check=check+1:'Where')
    sql +=  `${cond} district = "${district}" `
  }
  if(type != ""){
    if(check==0?cond='Where':cond='and')
    if(cond=='where'?check++:'Where')
    sql +=  `${cond} sub_type = "${type}" `
  }
  if(period != ""){
    if(check==0?cond='Where':cond='and')
    if(cond=='where'?check++:'Where')
    sql +=  `${cond} period = "${period}" `
  }

  conn.query(sql, (error, result)=>{
    if(!error){
      res.json(result)
    }

    console.log(sql)
  }) 

})

module.exports = router