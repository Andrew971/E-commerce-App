import React, { Component } from 'react';
import img from '../../../Assets/img/beat-solo-2.png'

export default class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hats: this.props.hats
        }
    }


    render() {

        const List = this.state.hats.map((hat) => {
            return (<div key={hat.key} className="col-4 col-md-4 col-lg-3" align="center">

                <li className="media">
                    <img className="img" src={img} alt={hat.name} />

                    <div className="media-body">
                        {hat.name}
                    </div>
                    <button onClick={() => { this.props.addShop(hat) }} className="btn btn-success">Add to cart</button>
                </li>
            </div>
            );
        });
        return (
            <main className="container-fluid">
                <div align="center">
                    <h1>+ My Hats page</h1><br />
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

