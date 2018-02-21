import React, { Component } from 'react';
import img from '../../../Assets/img/beat-solo-2.png'

export default class ShopList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data
        }
    }


    render() {
        const List = this.state.data.map((list) => {
            return (<div key={list.key} className="col-4 col-md-4 col-lg-3" align="center">

                <li className="media">
                    <img className="img" src={img} alt={list.name} />

                    <div className="media-body">
                        {list.name}
                    </div>
                    <button onClick={() => { this.props.addShop(list) }} className="btn btn-success">Add to cart</button>
                </li>
            </div>
            );
        });
        return (
            <main className="container-fluid">
                <div align="center">
                    <h1>+ My Shoplist page</h1><br />
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

