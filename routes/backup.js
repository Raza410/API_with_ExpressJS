const conn = require('../db')
const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    
    const lastdate = req.query.lastdate
    
    const sql = "select * from archaeology_tbl where (date(date)>=('" + lastdate + "') and date(date)<=curdate())order by date desc";
    console.log(sql)
    conn.query(sql, (error, result) => {
        if(!error){
            res.json(result)
        }
        else{
            res.json(error)
        }
    })
})

module.exports = router
