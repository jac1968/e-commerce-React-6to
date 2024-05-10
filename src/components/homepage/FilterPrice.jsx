import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/filterprice.css'

const FilterPrice = ({setProdPrice}) => {

    const {handleSubmit, register, reset}=useForm()

    const submit = data => {
        setProdPrice({
            from: data.from || 0,
            to: data.to || Infinity
        })
        reset({
            from: '',
            to: '',
        })
    }

  return (
    <div className='filterprice__container'>
        <form className='filterprice' onSubmit={handleSubmit(submit)}>
            <div className='filterprice__item'>
                <label htmlFor="from" >from</label>
                <input {...register('from')} id='from' type="text" />
            </div>
            <div className='filterprice__item'>
                <label htmlFor="to">To</label>
                <input {...register('to')} id='to' type="text" />
            </div>
            <button className='filterprice__btn'>Filter Price</button>
        </form>
    </div>
  )
}

export default FilterPrice