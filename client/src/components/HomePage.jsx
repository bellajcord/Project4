import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/home-page_styles.css';

export default class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
            <div className='masthead'>
                    <img id='logo_image' src='' alt='' ></img>
                </div>
            <div className="home-page-body">
                

                <div className="home-page-routing-container">
                    
                        <Link className="router-link" to="/Products">Product List</Link>
                                
                </div>
                <div className="home-page-routing-container">
                    
                        <Link className="router-link" to="/Contacts">Contact List</Link>
                                
                </div>
                <div className="home-page-routing-container">
                    
                        <Link className="router-link" to="/Orders">Order List</Link>
                                
                </div>
                </div>
            </div>
        )
    }
}
