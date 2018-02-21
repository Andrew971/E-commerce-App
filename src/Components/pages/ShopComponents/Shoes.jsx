import React, { Component } from 'react';

import img from '../../../Assets/img/beat-solo-2.png'

export default class Shop extends Component {
    constructor (props){
        super(props)
        this.state = {
            shoes:this.props.shoes
        }
    }


  render() {

    const List = this.state.shoes.map((shoe) => {
        return (<div key={shoe.key} className="col-4 col-md-4 col-lg-3" align="center">

            <li className="media">
                <img className="img" src={img} alt={shoe.name} />

                <div className="media-body">
                    {shoe.name}
                </div>
                <button onClick={() => { this.props.addShop(shoe) }} className="btn btn-success">Add to cart</button>
            </li>
        </div>
        );
    });
    return (
        <main className="container-fluid">
            <div align="center">
                <h1>+ My Shoes page</h1><br />
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

