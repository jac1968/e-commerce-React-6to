import React from 'react'
import './styles/productcard.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postCartThunk } from '../../store/slices/cart.slice'


const ProductCard = ({prod}) => {
  
  const dispatch = useDispatch()

  const navigate = useNavigate()
  
  const handleprod = ()=> {
    navigate(`/product/${prod.id}`)
  }

  const handleBuy = () => {
    dispatch(postCartThunk('/cart', {
      quantity:1,
      productId: prod.id,
    }))
  }

  return (
  
    <article className='productcard'>
        <figure onClick={handleprod} className='productcard__img'>
          <img src={prod.images[0].url} alt="Product Picture" />
        </figure>
        <hr />
        <ul className='productcard__list'> 
          <li className='productcard__item'><span>{prod.band}</span><span>{prod.title}</span></li>
          <li className='productcard__item'><span>Precio</span><span> $ {prod.price}</span></li>
        </ul>
        <button onClick={handleBuy} className='productcard__btn'>Comprar</button>
    </article>
  )
}

export default ProductCard