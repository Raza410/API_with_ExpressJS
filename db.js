const mysql = require("mysql")

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "greenage_archaeology_form"
})

conn.connect((error) =>{
    if(error){
        console.log(error)
    }
    else{
        console.log("Connected")
    }
})

module.exports = conn;