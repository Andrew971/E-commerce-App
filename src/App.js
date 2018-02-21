import React, { Component } from 'react';
import axios from 'axios';
import Header from './Components/headerComponent/Header'
import Footer from './Components/footerComponent/Footer'
import Home from './Components/pages/Home'
import Shop from './Components/pages/Shop'
import Cart from './Components/pages/Cart'
import NavBar from './Components/headerComponent/NavBar'
import {
  Route
} from 'react-router-dom'

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





export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shoes: [],
      hats: [],
      cart: [],
      total: 2,
      username: ''
    }
    this.apiUrl = 'http://localhost:8080/cart'
  }


  componentDidMount() {
    let Shoes = data.filter((shoes) => {
      return shoes.type === 'shoe'
    })
    let Hats = data.filter((hats) => {
      return hats.type === 'hat'
    })
    this.setState({
      shoes: Shoes,
      hats: Hats
    })

    axios.get(this.apiUrl)
      .then((res) => {
        this.setState({
          cart: res.data
        });
      })

    let username = localStorage.getItem('username')
    this.setState({ username: username })
  }


  handler(val) {
    let input = val
    localStorage.setItem('username', val);
    this.setState({ username: input })
  }


  addShop(art) {
    const product = data.find((item) => {
      return item.key === art.key
    })

    axios.post(this.apiUrl, { product, quantity: 1, subtotal: product.price })
      .then((res) => {
        let Total = res.data.reduce((memo, val) => {
          return memo += val.subtotal;
        }, 0);


        this.setState({
          cart: res.data,
          total: Total
        })
      })

  }

  // Handle remove
  handleRemove(key) {

    axios.delete(this.apiUrl + '/' + key)
      .then((res) => {
        let Total = res.data.reduce((memo, val) => {
          return memo += val.subtotal;
        }, 0);

        this.setState({
          cart: res.data,
          total: Total
        });

      })

  }

  getSubTotal(item, val) {
    let result = item.price * Number(val)

    this.state.cart.forEach((product) => {
      if (product.product.key === item.key) {
        product.subtotal = result
      }
    })

    let Total = this.state.cart.reduce((memo, val) => {
      return memo += val.subtotal;
    }, 0);

    this.setState({ total: Total })

  }

  render() {
    return (
      <div>
        <NavBar cart={this.state.cart.length} />
        <Header />

        <Route exact path="/" render={() =>
          <Home
            handler={this.handler.bind(this)} />
        } />
        <Route path="/Shop" render={(routeProps) =>
          <Shop
            {...routeProps}
            shoes={this.state.shoes}
            hats={this.state.hats}
            addShop={this.addShop.bind(this)}
            data={data}
            username={this.state.username} />
        } />
        <Route path="/cart" render={() =>
          <Cart
            total={this.state.total}
            getSubTotal={this.getSubTotal.bind(this)}
            cart={this.state.cart}
            remove={this.handleRemove.bind(this)} />
        } />
        <Footer />

      </div>
    );
  }
}


