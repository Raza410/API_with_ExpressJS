const express = require("express")
const app = express()
const alldata = require('./routes/archeodata')
const conn = require('./db')

// app.get('/alldata', (req, res) => {
//   res.send(alldata)

//   const lp = req.query.id
//   res.send(lp)
// })


function filters(value, district, province, type, period){
  // var sql = `SELECT DISTINCT ${value} FROM archaeology_tbl WHERE province = ${province} AND district =  ${district} AND sub_type = ${type} AND period = ${period} ORDER BY ${value} ASC`;
  var sql = `SELECT DISTINCT ${value} FROM archaeology_tbl `
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
    // if(province != "" || ){
    // }
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
    // console.log(result)
    // console.log(error)
    // if(!error){
    //   result.map(function(val,i){
    //     list.districts.push(val['district'])
    //   })  
    // }
    console.log(sql)
  })
}

filters("district", "Punjab", "", "Mosque", "", "")

app.listen(5000, () => {
    console.log("started")
  })