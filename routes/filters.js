const conn = require('../db')
const express = require("express")
const router = express.Router()

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

router.get('/', (req, res) => {

  var list = {
    "district" : [],
    "province" : [],
    "period" : [],
    "type" : [],
  }

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
      list.district = result.map(val => val.district).filter(onlyUnique).sort()
      list.province = result.map(val => val.province).filter(onlyUnique).sort()
      list.period = result.map(val => val.period).filter(onlyUnique).sort()
      list.type = result.map(val => val.sub_type).filter(onlyUnique).sort()
     
      res.json(list)
    }
    
  }) 

  console.log(sql)

})

module.exports = router