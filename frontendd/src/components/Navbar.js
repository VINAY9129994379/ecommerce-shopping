import './Navbar.css';
import React, { useContext, useRef } from 'react'

import shopping from '../assets/shopping.jpg'
import cart_icon from '../assets/cart_icon.jpg'
import { ShopContext } from '../context/ShopContext'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Link } from 'react-router-dom';
function Navbar() {
  const {getTotalCarts}=useContext(ShopContext);
  const menuRef=useRef();
  
  const dropdown=(e)=>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
        <div className='nav_logo'>
            <img src={shopping} alt="" />
            <p>!SHOPPING</p>
        </div>
        <ArrowForwardIosIcon className='dropdown-arrow' onClick={dropdown}/>
        <ul ref={menuRef} className='nabmenu'>
            <li><Link to='/' style={{textDecoration:'none'}}>Shop</Link></li>
            <li><Link to='/mens' style={{textDecoration:'none'}}>Men</Link></li>
            <li><Link to='/womens' style={{textDecoration:'none'}}>Women</Link></li>
            <li><Link to='/kids' style={{textDecoration:'none'}}>Kids</Link></li>
        </ul>
        <div className='navlogincart'>
          {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<Link to='/login' style={{textDecoration:'none'}}><button>Login</button></Link>
        }
            <Link to='/cart'><img src={cart_icon} alt=""/></Link>
            <div className='nav-cart-count'>{getTotalCarts()}</div>
        </div>
        
    </div>
  )
}

export default Navbar