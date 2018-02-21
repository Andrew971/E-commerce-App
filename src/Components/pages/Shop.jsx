import React, { Component } from 'react';
import Shoes from './ShopComponents/Shoes'
import Hats from './ShopComponents/Hats'
import ShopList from './ShopComponents/ShopList'

import {
  Route,
  NavLink,
  Switch
} from 'react-router-dom'



export default class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shoes: this.props.shoes,
      hats: this.props.hats
    }
  }


  render() {
   let { match } = this.props
    return (
      <main className="container-fluid">
        <div align="center">
          <NavLink to={match.url}>Shop</NavLink> >
          <NavLink to={match.url + '/hats'}>Hats</NavLink> >
          <NavLink to={match.url + '/shoes'}>Shoes</NavLink>
          <h1>Welcome {this.props.username}</h1>
          <Switch>
          <Route exact path="/Shop" render={() =>
              <ShopList {...this.props} />
            } />
            <Route path={match.url + '/hats'} render={() =>
              <Hats 
              {...this.props}
              hats={this.state.hats}  />
            } />

            <Route path={match.url + '/shoes'} render={() =>
              <Shoes 
              {...this.props}
              shoes={this.state.shoes}  />
            } />
          </Switch>
          
  </div>
      </main>
    );
  }
}

