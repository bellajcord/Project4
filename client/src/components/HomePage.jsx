import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <h1 className="home-page-title">Peck'n Woods Management Portal</h1>

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
        )
    }
}
