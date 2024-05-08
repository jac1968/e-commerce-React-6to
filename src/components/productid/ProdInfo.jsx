import React from 'react'
import './styles/prodinfo.css'

const ProdInfo = ({product}) => {
  return (
    <article>
        <h3>{product?.brand}</h3>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <div>
            <ul>
                <li><span>Precio</span><span>$ {product?.price}</span></li>
            </ul>
        </div>
    </article>
  )
}

export default ProdInfo