const conn = require('../db')

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
  // console.log(fetched)
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

module.exports = list