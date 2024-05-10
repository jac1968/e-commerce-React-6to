import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import ProdInfo from '../components/productid/ProdInfo'
import './styles/producid.css'
import ProdSlider from '../components/productid/ProdSlider'
import ProdSimilar from '../components/productid/ProdSimilar'

const ProducId = () => {

    const [product, getProduct] = useFetch()    

    const params = useParams()

    useEffect(() => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${params.id}`
        getProduct(url)
    }, [params.id])

  return (
    <section className='producid'>
      <ProdSlider
        product={product}
      />
      <ProdInfo
        product={product}
      />
      <ProdSimilar
        product={product}
      />
    </section>
  )
}

export default ProducId