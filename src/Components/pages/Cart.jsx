import React, { Component } from 'react';
import img from '../../Assets/img/beat-solo-2.png'
import {
    Link,
} from 'react-router-dom'

export default class Cart extends Component {
   




    render() {
        
        const List = this.props.cart.map((item) => {

            let input
            return (
                <tr key={item.product.key}>
                    <td data-th="Product">
                        <div className="row">
                            <div className="col-sm-4">
                                <img src={img} alt="..." className="img-responsiove img" />
                            </div>
                            <div className="col-sm-8">
                                <h4>{item.product.name}</h4>
                                <p align="justify">Quis aute iure reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </td>
                    <td data-th="Price">
                        {item.product.price}
                    </td>
                    <td data-th="Quantity">
                        <input type="number" min="1" className="form-control col-md-12" ref={type => {
                            input = type;
                        }} onChange={(e) => {
                            e.preventDefault();
                            this.props.getSubTotal(item.product, input.value)
                        }} defaultValue={item.quantity} />
                    </td>
                    <td data-th="Subtotal" className="text-center">{item.subtotal}</td>
                    <td className="actions" data-th="">
                        <button className="btn btn-danger btn-sm" onClick={() => { this.props.remove(item.product.key) }}><i className="fa fa-trash-o"></i></button>
                    </td>
                </tr>
            );
        });

        return (
            <main className="container" align="center">
                <div align="center">
                    <h1>My Cart page</h1>
                </div><br />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th style={{ width: "50%" }} className="text-center">Product</th>
                            <th style={{ width: "10%" }} className="text-center">Price</th>
                            <th style={{ width: "10%" }} className="text-center">Quantity</th>
                            <th style={{ width: "22%" }} className="text-center">Subtotal</th>
                            <th style={{ width: "8%" }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {List}

                    </tbody>
                    <tfoot>
                        <tr className="visible-xs">
                            <td className="text-center"><strong>Total 1.99</strong></td>
                        </tr>
                        <tr>
                            <td><Link to="/shop" className="btn btn-warning">
                                <i className="fa fa-angle-left"></i> Continue Shopping</Link></td>
                            <td colSpan="2" className="hidden-xs"></td>
                            <td className="hidden-xs text-center"><strong>Total ${this.props.total}</strong></td>
                            <td><a href="" className="btn btn-success">Checkout <i className="fa fa-angle-right"></i></a></td>
                        </tr>
                    </tfoot>
                </table>

            </main>
        );
    }
}

