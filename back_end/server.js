const express = require('express')
const app = express()
const port = process.argv[2] || 8080

const cartRouter = require('./Routes/cart')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    next();
  });

app.use('/cart', cartRouter)


  



app.listen(port, (req, res) => {
    console.log('I am running')
})