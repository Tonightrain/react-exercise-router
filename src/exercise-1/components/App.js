import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Route, BrowserRouter, Switch, NavLink, Redirect} from 'react-router-dom';
import AboutUs from './AboutUs';
import Home from './Home';
import MyProfile from './MyProfile';
import Products from '../../exercise-2/Products';
import Product from '../../exercise-2/Product';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <nav className="header">
          <ul>
            <li><NavLink to="/about-us" className="aboutUs" >AboutUs</NavLink></li>
            <li><NavLink to="/my-profile" className="myProfile" >MyProfile</NavLink></li>
            <li><NavLink to="/products" className="products" >Products</NavLink></li>
            <li><NavLink to="/" exact className="home" >Home</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/my-profile" component={MyProfile} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/products/:id" component={Product} />
          <Redirect from="/goods" to="/products" />
          <Route path="*" component={Home}></Route>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
