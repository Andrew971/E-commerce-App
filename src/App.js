import React, { Component } from 'react';
import axios from 'axios';
import Header from './Components/headerComponent/Header'
import Footer from './Components/footerComponent/Footer'
import NavBar from './Components/headerComponent/NavBar'

import Home from './Components/pages/Home'
import Shop from './Components/pages/Shop'
import Cart from './Components/pages/Cart'
import Login from './Components/pages/Login'


import {
  Route
} from 'react-router-dom'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data:[],
      shoes: [],
      hats: [],
      cart: [],
      total: 2,
      username: ''
    }
    this.apiUrl = 'http://localhost:8080/cart'
    this.data = 'http://localhost:8080/data'
  }


  componentWillMount() {

    axios.get(this.data)
    .then((res) => {
      let Shoes = res.data.filter((shoes) => {
        return shoes.type === 'shoe'
      })
      let Hats = res.data.filter((hats) => {
        return hats.type === 'hat'
      })
      this.setState({
        data:res.data,
        shoes: Shoes,
        hats: Hats
      })
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


  addShop(art, input) {
    const product = this.state.data.find((item) => {
      return item.key === art.key
    })
    axios.post(this.apiUrl, { product, quantity: input, subtotal: product.price * Number(input) })
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

        <Route exact path="/login" render={() =>
          <Login
            handler={this.handler.bind(this)} />
        } />
        <Route exact path="/" render={() =>
          <Home />
        } />
        <Route path="/Shop" render={(routeProps) =>
          <Shop
            {...routeProps}
            getSubTotal={this.getSubTotal.bind(this)}
            shoes={this.state.shoes}
            hats={this.state.hats}
            addShop={this.addShop.bind(this)}
            data={this.state.data}
            username={this.state.username} 
            />
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


