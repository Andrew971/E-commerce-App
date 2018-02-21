import React, { Component } from 'react';
import img from '../../../Assets/img/beat-solo-2.png'
import {
    Link
} from 'react-router-dom'

export default class ShopList extends Component {


    render() {
        const List = this.props.data.map((list) => {
            let input
            return (<div key={list.key} className="col-4 col-md-4 col-lg-3" align="center">

                <li className="media">
                    <Link to={'/' + list.key}><img className="img" src={img} alt={list.name} /></Link>

                    <div className="media-body">
                        {list.name}
                    </div>
                    <input type="number" className="form-control" ref={type => {
                        input = type;
                    }} onChange={(e) => {
                        e.preventDefault();
                    }} defaultValue="1" />
                    <button onClick={() => { this.props.addShop(list, input.value) }} className="btn btn-success">Add to cart</button>
                </li>
            </div>
            );
        });
        return (
            <main className="container-fluid">
                <div align="center">
                    <br />
                    <div className="row">
                        <ul className="list-unstyled">
                            {List}
                        </ul>
                    </div>
                </div>
            </main>
        );
    }
}

