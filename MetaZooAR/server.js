const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require("path")
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "/")))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.get('/', (req,res) => {
    res.render('index')
})
app.get('/zebra', (req,res) => {
    res.sendFile(path.join(__dirname+'/zebra.html'));
})
app.get('/falcon', (req,res) => {
    res.sendFile(path.join(__dirname+'/falcon.html'));
})
app.get('/deer', (req,res) => {
    res.sendFile(path.join(__dirname+'/deer.html'));
})
app.listen(3000, () => {
    console.log('listening on port 3000')
})