import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { remove } from '../Store/cartSlice'
const Cart = () => {

  

    const products = useSelector((item) => item.cart)

    const dispatch = useDispatch()

    const handleRemove =(product) => {
        dispatch(remove(product))
    }
  return (
    <div>
      <h3>cart</h3>
      <div className='cartWrapper'>
                {/* to get cart items use useSelectore */}
        {
             products.map((product) => (
                <div className='cartCard' key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button
                    onClick={() => handleRemove(product.id)}
                    className='btn'>Remove item</button>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Cart
