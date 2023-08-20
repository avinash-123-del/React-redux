import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
    //cart is the name of the reducer
    //useSelector is just like suscribing the data 
    const items = useSelector((item) => item.cart)

    return (
        <div style={{display:'flex' , justifyContent:'space-between' ,width:'80%', margin:'auto' }}>
            <Link className='navLink' to='/'><span>LOGO</span></Link>
            <div>
                <Link className='navLink' to='/'>Home</Link>
                <Link className='navLink' to='/cart'>Cart</Link>
                <span className='cartCount'>cart items : {items.length}</span>
            </div>
        </div>
    )
}

export default Navbar
