const conn = require('../db')

function filters(value, district, province, type, period){
    let f = conn.query(`SELECT DISTINCT ${value} FROM archaeology_tbl WHERE province = ${province} AND district =  ${district} AND sub_type = ${type} AND period = ${period} ORDER BY ${value} ASC`, (error, result)=>{
        // console.log(fetched)
        // if(!error){
        //   result.map(function(val,i){
        //     list.districts.push(val['district'])
        //   })  
        // }
      
        console.log(f)
      })
}

filters(district, "", "Punjab", "", "", "")