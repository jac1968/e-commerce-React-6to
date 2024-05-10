import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import './styles/login.css'

const Login = () => {

  const [hasToken, setHasToken] = useState()
  const loginUser = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    setHasToken(localStorage.getItem('token'))
  }, [])

  const {handleSubmit, register, reset} = useForm()

  const submit = async(data) => {
    const url ='https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
    await loginUser(url, data)
    reset({
      email: '',
      password: '',
    })

    setHasToken(localStorage.getItem('token'))
    navigate('/cart')

  }
    const handleLogout = ()=> {
      localStorage.removeItem('token')
      setHasToken()
    }

  return (
    <>
      {
        hasToken ?
          <button onClick={handleLogout}>Logout</button>
        :
          <div className='login'>
            <form className='login__form' onSubmit={handleSubmit(submit)}>
              <div>
                <label htmlFor="email">✉️ Email</label>
                <input {...register('email')} id='email' type="email" />
              </div>
              <div>
                <label htmlFor="password">⌨️ Password</label>
                <input {...register('password')} id='password' type="password" />
              </div>
              <button> ✅ Login</button>
            </form>
            <p>Create your account <Link to='/register'> Register</Link></p>
          </div>
      }
    </>
  )
}

export default Login