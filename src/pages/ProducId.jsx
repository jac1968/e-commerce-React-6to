import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import ProdInfo from '../components/productid/ProdInfo'

const ProducId = () => {

    const [product, getProduct] = useFetch()    

    const params = useParams()

    useEffect(() => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${params.id}`
        getProduct(url)
    }, [])

  return (
    <section>
      <ProdInfo
        product={product}
      />
    </section>
  )
}

export default ProducId