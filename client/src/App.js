import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './/components/Navbar_component';
import HomePage from './components/HomePage';
import Product from './components/product_list_compnent';
import Orders from './components/order_component';
import Contact from './components/customer_contact_component';



class App extends Component {

  render(){
    return (
      <div>
        <Router>
          <div><NavBar/></div>
          <div className='router-body'>
          <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/Products' component={Product}/>
          <Route exact path='/Orders' component={Orders}/>
          <Route exact path='/Contacts' component={Contact}/>
          </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;