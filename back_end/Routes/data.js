const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const data = [
    {
      name: 'High Top Sneaker',
      price: 15,
      picture: './../public/imgs/shoe3.png',
      type: 'shoe',
      key: 1
    },
    {
      name: 'High Top Hats',
      price: 10,
      picture: './../public/imgs/shoe3.png',
      type: 'hat',
      key: 2
    },
    {
      name: 'High hils',
      price: 40,
      picture: './../public/imgs/shoe3.png',
      type: 'shoe',
      key: 3
    },
    {
      name: 'Sport Cap',
      price: 20,
      picture: './../public/imgs/shoe3.png',
      type: 'hat',
      key: 4
    }
  ]
  

router.get('/', (req, res) => {
    res.send(data)
})



module.exports = router


{username 
password 
 {
   cart:[]
 }
}