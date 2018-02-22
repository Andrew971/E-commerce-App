import React, { Component } from 'react';
import axios from 'axios';

import img from '../../../Assets/img/beat-solo-2.png'

export default class SingleProduct extends Component {
    constructor() {
        super()
        this.state = {
            productList: []
        }
        this.data = 'http://localhost:8080/data'

    }
    componentWillMount() {
        axios.get(this.data)
        .then((res) => {
            let products = res.data.find((item)=>{
                return item.key === Number(this.props.match.params.id)
            })
            this.setState({
                productList: products
            })
        })
       
    }
  render() {
    let product =this.state.productList
    return (
        <main className="container box1" align="center">
    <div className="row bio-grids">
        <div className="col-12 col-sm-12 col-md-6 bio-grid-left">
            <div className="bio-img">
                    <h3 className="movie-title">
                            {product.name}
                        </h3>
                <img src={img} alt="img"/>
                
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 bio-grid-right">
            <div className="bio-text">
                <h3>Description </h3>
                <p>
                {product.name}
                </p>
                Release date: 
            </div>
            
        </div>
    </div>
</main>
    );
}
}

