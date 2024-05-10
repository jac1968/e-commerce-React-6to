import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPruchasesThunk } from '../store/slices/purchases.slice'
import PurchaseCard from '../components/purchases/PurchaseCard'
import './styles/purchases.css'

const Purchases = () => {

  const purchases = useSelector(store => store.purchases)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPruchasesThunk())
  }, [])
  
  return (
    <div className='purchases'>
      {
        purchases.map(prod => (
          <PurchaseCard
            key={prod.id}
            prod={prod}
          />
        ))
      }
    </div>
  )
}

export default Purchases