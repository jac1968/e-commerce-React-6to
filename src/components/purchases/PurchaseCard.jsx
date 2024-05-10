import React from 'react'
import './styles/purchasecard.css'

const PurchaseCard = ({prod}) => {
  return (
    <article  className='purchasescard'>
        <h3 className='purchasescard__title'>prod.product.title</h3>
        <figure className='purchasescard__img'>
            <img src={prod.product?.images[0].url} alt="Picture Item" />
        </figure>
        <p className='purchasescard__date'>{prod.updatedAt.slice(0, 10)}</p>
        <span className='purchasescard__qty'>{prod.quantity}</span>
        <span className='purchasescard__price'>Total Price: ${prod.product?.price * prod.quantity}</span>
    </article>
  )
}

export default PurchaseCard