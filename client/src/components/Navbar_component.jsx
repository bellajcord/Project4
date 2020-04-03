
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/navbar_styles.css';


export default class NavBar extends Component {
    render() {
        return (
            <div className='header-fix'>
                <div className='header'>
                    <img id='logo_image' src='https://i.imgur.com/zNvI7KS.png?1' alt='logo' ></img>
                </div>
                <div className='navContainer'>
                    <Link to='/' className='nav'><div>Home</div></Link> 
                    
                    <Link to='/Products' className='nav'><div>Products</div></Link> 
                    <Link to='/Orders' className='nav'><div>Orders</div></Link> 
                    <Link to='/Contacts' className='nav'><div>Contact Info</div></Link>
                </div>
            </div>
        )
    }
}