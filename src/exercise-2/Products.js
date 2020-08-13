import React from 'react';
import {Link} from 'react-router-dom';
import '../exercise-1/styles/App.css';
//import Product from './Product';


class Products extends React.Component{
    state = {
        products:[
                {id: 1, name: "Bicycle",price: 30,quantity: 15,desc: "Bicycle is Good" },
                {id: 2,name: "TV",price: 40,quantity: 16,desc: "TV is good"},
                {id: 3, name: "Pencil",price: 50,quantity: 17,desc: "Pencil is good"}
            ],
        }

    render(){
        return(
            <div className="allproducts">
                <h1>All Products</h1>
                {this.state.products.map((product) =>(
                    <Link key={product.id} to={`products/${product.id}`} className={product.name} style={{color:'red'}}>
                        {product.name}
                    </Link>
                ))}
                    {/* <li><Link to="/products/1" style={{color:'red'}}>Bicycle</Link></li>
                    <li><Link to="/products/2" style={{color:'red'}}>TV</Link></li>
                    <li><Link to="/products/3" style={{color:'red'}}>Pencil</Link></li> */}
            </div>
        )
    }
}

export default Products;