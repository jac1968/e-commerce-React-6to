import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/filtercategory.css'

const FilterCategory = ({setProdCategory}) => {

    const [categories, getCategories] = useFetch()

    useEffect(() => {
        const url='https://e-commerce-api-v2.academlo.tech/api/v1/categories'
        getCategories(url)
    }, [])

    const selOpt = useRef()

    const handleChange = ()=> {
        setProdCategory(selOpt.current.value)
    }

  return (
    <select className='filtercategory' ref={selOpt} onChange={handleChange}>
        <option value="">All Categories</option>
        {
            categories?.map(category=> (
                <option key={category.id} value={category.id}>{category.name}</option>
            ))
        }
    </select>
  )
}

export default FilterCategory