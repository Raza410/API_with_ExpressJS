const conn = require('../db')
const express = require("express")
const router = express.Router()

var list = {
  "list" : [],
  "districts" : [],
  "sub_types" : [],
}

conn.query('SELECT * FROM archaeology_tbl', (error, result)=>{
  console.log("fetched")
  if(!error){
    list.list = result
  }
})

conn.query('SELECT DISTINCT district FROM archaeology_tbl ORDER BY district ASC', (error, result)=>{
  if(!error){
    result.map(function(val,i){
      list.districts.push(val['district'])
    })  
  }

})

conn.query('SELECT DISTINCT sub_type FROM archaeology_tbl ORDER BY sub_type ASC', (error, result)=>{

  if(!error){
    result.map(function(val,i){
      list.sub_types.push(val['sub_type'])
    })  
  }
})

router.get('/', (req, res) => {
  res.json(list)

})

module.exports = router