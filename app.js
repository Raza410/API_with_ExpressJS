const express = require("express")
const app = express()
const alldata = require('./routes/archeodata')
const conn = require('./db')

app.use('/alldata', require('./routes/archeodata'))
app.use('/filters', require('./routes/filters'))
app.use('/backup', require('./routes/backup'))

app.listen(5000, () => {
    console.log("started")
  })


  