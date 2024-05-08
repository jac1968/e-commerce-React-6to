import React from 'react'
import { useForm } from 'react-hook-form'

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
    <form onSubmit={handleSubmit(submit)}>
        <div>
            <label htmlFor="from">from</label>
            <input {...register('from')} id='from' type="text" />
        </div>
        <div>
            <label htmlFor="to">To</label>
            <input {...register('to')} id='to' type="text" />
        </div>
        <button>Filter Price</button>
    </form>
  )
}

export default FilterPrice