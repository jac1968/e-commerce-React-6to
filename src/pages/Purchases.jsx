import React from 'react'
import { useSelector } from 'react-redux'

const Purchases = () => {

  const purchases = useSelector(store => store.purchases )

  return (
    <div>Purchases</div>
  )
}

export default Purchases