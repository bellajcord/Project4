
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div className='header-fix'>
                <div className='header'>
                    <img src='' alt='logo'></img>
                </div>
                <div className='navContainer'>
                    <Link to='/' className='nav'><div>Home</div></Link>
                    <Link to='/ProductList' className='nav'><div>Products</div></Link>
                    <Link to='/Orders' className='nav'><div>Orders</div></Link>
                    <Link to='/CustomerContact' className='nav'><div>Contact Info</div></Link>
                </div>
            </div>
        )
    }
}