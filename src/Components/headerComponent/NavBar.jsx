import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'

export default class NavBar extends Component {

    render() {
        return (
            <nav className="nav_bar">
                <div className="row">
                <div className="col-12 col-xs-9 col-md-6 col-lg-6" align="center">
                    
                                <ul className="pull-left">
                                    <li><Link className="link" to="/">Home</Link></li>
                                    <li><Link className="link" to="/shop">Shop</Link></li>
                                </ul>
                    </div>

                    <div className="col-12 col-xs-3 col-md-6 col-lg-6" align="center">
                    <ul className="pull-right">
                                    <li><Link className="link active" to="/cart">Cart({this.props.cart})</Link></li>
                                </ul>
                    </div>
                  
                    
                </div>

            </nav>
        );
    }
}





