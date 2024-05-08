import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../hooks/useFetch'
import ProductCard from '../components/homepage/ProductCard'
import './styles/homepage.css'
import FilterPrice from '../components/homepage/FilterPrice'
import FilterCategory from '../components/homepage/FilterCategory'

const HomePage = () => {

    const [prodPrice, setProdPrice] = useState({
        from: 0,
        to: Infinity,
    })
    const [prodCategory, setProdCategory] = useState('')
    const [prodName, setProdName] = useState('')
    const [products, getProducts] = useFetch()

    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
        getProducts(url)
    }, [])

    const textInput = useRef()

    const handleChange = () => {
         setProdName(textInput.current.value.toLowerCase().trim()) 
    }

    const prodfilters = (prod)=> {
        const perName = prod.title.toLowerCase().includes(prodName)
        const perPrice = +prod.price <= +prodPrice.to && +prod.price >= +prodPrice.from
        const perCategory = prodCategory ? prod.categoryId === +prodCategory : prod
        return perName && perPrice && perCategory
    }

  return (
    <div className='homepage'>
        <div className='homepage__filter'>
            <input ref={textInput} onChange={handleChange} type="text" />
            <FilterPrice
                setProdPrice={setProdPrice}
            />
            <FilterCategory
                setProdCategory={setProdCategory}
            />
        </div>
        <div className='homepage__container'>
            {
                products?.filter(prodfilters).map((prod)=> (
                    <ProductCard
                        key={prod.id}
                        prod={prod}
                    />
                ))
            }
         </div>
    </div>
  )
}

export default HomePage