import React from 'react';
import '../exercise-1/styles/App.css';

class Product extends React.Component{
    state = {
        products:[
                {id: 1, name: "Bicycle",price: 30,quantity: 15,desc: "Bicycle is Good" },
                {id: 2,name: "TV",price: 40,quantity: 16,desc: "TV is good"},
                {id: 3, name: "Pencil",price: 50,quantity: 17,desc: "Pencil is good"}
            ],
        }
    

    render(){
        return(
            <div className="details">
                <h1>Product Details:</h1>
                <p>Name:{this.state.products[this.props.match.param.id-1].name}</p>
                <p>id:{this.props.match.param.id}</p>
                <p>Price: {this.state.products[this.props.match.param.id-1].price}</p>
                <p>Quantity: {this.state.products[this.props.match.param.id-1].quantity}</p>
                <p>Desc: {this.state.products[this.props.match.param.id-1]}</p>
                <p>URL: {this.props.location.pathname}</p>
            </div>
        )
    }
}

export default Product;

