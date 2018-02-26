const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

let cart = []

router.get('/', (req, res) => {
    res.send(cart)
})

router.post('/', jsonParser, (req, res, body) => {
    let data = req.body
    let flag = false
    if (cart.length == 0) {
        cart.push(data)
    } else {
        cart.forEach((item) => {
            if (data.product.key == item.product.key) {
                item.quantity = Number(item.quantity) + Number(data.quantity)  
                item.subtotal = item.product.price * Number(item.quantity)
                flag = true
            }
        })
        if(!flag){
            cart.push(data)
        }
    }
    res.json(cart)

})

router.delete('/:id', jsonParser, (req, res, body) => {
    let {id} = req.params
    cart = cart.filter((item) => {
        return item.product.key !== Number(id);
      });
  
    res.json(cart)

})



module.exports = router