import React, { Component } from 'react';
import Shoes from './ShopComponents/Shoes'
import Hats from './ShopComponents/Hats'
import ShopList from './ShopComponents/ShopList'
import SingleProduct from './ShopComponents/SingleProduct'

import {
  Route,
  NavLink,
  Switch
} from 'react-router-dom'



export default class Shop extends Component {


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
              />
            } />

            <Route path={match.url + '/shoes'} render={() =>
              <Shoes 
              {...this.props}
               />
            } />

            <Route exact path={match.url + '/:id'} render={({match}) =>
              <SingleProduct 
              {...this.props}
              match={match}
               />
            } />
          </Switch>
          
  </div>
      </main>
    );
  }
}

