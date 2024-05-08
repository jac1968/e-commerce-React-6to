import React from 'react'
import './cartProd.css'
import { deleteCartThunk } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'

const CartProd = ({prod}) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteCartThunk('/cart', prod.id))
  }

  return (
    <article className='cartprod'>
        <h3 className='cartprod__title'>{prod.product?.title}</h3>
        <figure className='cartprod__img'>
            <img src={prod.product?.images[0].url} alt="Product Image" />
        </figure>
        <div className='cartprod__container'>
          <button>-1</button>
          <span>{prod.quantity}</span>
          <button>+1</button>
        </div>
        <button onClick={handleDelete}>Delete</button>
        <span className='cartprod__price'>Total: ${prod.product?.price * prod.quantity}</span>
    </article>
  )
}

export default CartProd