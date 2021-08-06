const express = require("express")
const app = express()

const alldata = require('./routes/archeodata')

app.get('/alldata', (req, res) => {
  res.send(alldata)
})


app.listen(5000, () => {
    console.log("started")
  })