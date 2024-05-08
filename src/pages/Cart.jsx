import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartThunk } from '../store/slices/cart.slice'
import CartProd from '../components/cart/CartProd'
import './styles/cart.css'

const Cart = () => {

  const cart = useSelector(store => store.cart)

  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(getCartThunk('/cart'))
  }, [])
  
  console.log(cart)

  return (
    <>
      <div className='cart'>
        {
          cart?.map(prod => (
            <CartProd
              key={prod.id}
              prod={prod}
            />
          ))
        }
      </div>
      <div cart__totals>
        <p>Total Products: {cart.reduce((ca, pr)=> {
          return ca + pr.quantity
          }, 0)}</p>
        <p>Total Price $ {cart.reduce((ca, pr)=> {
          return ca + (pr.quantity * pr.product?.price)
        }, 0)}</p>
        <BUtton>Buy</BUtton>
      </div>
    </>
  )
}

export default Cart