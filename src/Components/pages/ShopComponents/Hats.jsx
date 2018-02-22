import React, { Component } from 'react';
import img from '../../../Assets/img/beat-solo-2.png'
import {
    Link
} from 'react-router-dom'
export default class Shop extends Component {

    render() {
        let {match}= this.props

        const List = this.props.hats.map((hat) => {
            let input

            return (<div key={hat.key} className="col-4 col-md-4 col-lg-3" align="center">

                <li className="media">
                <Link to={match.url + '/'+ hat.key}><img className="img" src={img} alt={hat.name} /></Link>

                    <div className="media-body">
                        {hat.name}
                    </div>
                    <input type="number" min="1" className="form-control Quantity" ref={type => {
                        input = type;
                    }} onChange={(e) => {
                        e.preventDefault();
                    }} defaultValue="1" />
                    <button onClick={() => { this.props.addShop(hat, input.value) }} className="btn btn-success">Add to cart</button>
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

