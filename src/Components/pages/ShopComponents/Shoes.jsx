import React, { Component } from 'react';

import img from '../../../Assets/img/beat-solo-2.png'

export default class Shop extends Component {


    render() {

        const List = this.props.shoes.map((shoe) => {
            let input

            return (<div key={shoe.key} className="col-4 col-md-4 col-lg-3" align="center">

                <li className="media">
                    <img className="img" src={img} alt={shoe.name} />

                    <div className="media-body">
                        {shoe.name}
                    </div>
                    <input type="number" className="form-control" ref={type => {
                        input = type;
                    }} onChange={(e) => {
                        e.preventDefault();
                    }} defaultValue="1" />
                    <button onClick={() => { this.props.addShop(shoe, input.value) }} className="btn btn-success">Add to cart</button>
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

