import { Link, useLocation, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import From from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Helmet } from 'react-helmet-async'
import { useContext, useEffect, useState } from 'react'
import Axios from 'axios'
import { Store } from '../Store'
import { toast } from 'react-toastify'
import { getError } from '../utils'

export default function SigninScreen() {
  const navigate = useNavigate()
  const { search } = useLocation
  const redirectInUrl = new URLSearchParams(search).get('redirect')
  const redirect = redirectInUrl ? redirectInUrl : '/'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { userInfo } = state
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const data = await Axios.post('/api/users/signin', {
        email,
        password,
      })
      // console.log(data)
      ctxDispatch({ type: 'USER_SIGNIN', payload: data })
      localStorage.setItem('userInfo', JSON.stringify(data))
      navigate(redirect || '/')
    } catch (error) {
      toast.error(getError(error))
    }
  }

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, redirect, userInfo])
  return (
    <Container className='small-container'>
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <h2 className='my-3'>Sign in</h2>
      <From onSubmit={submitHandler}>
        <From.Group className='mb-3' controlId='email'>
          <From.Label>Email</From.Label>
          <From.Control
            type='email'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </From.Group>
        <From.Group className='mb-3' controlId='password'>
          <From.Label>Password</From.Label>
          <From.Control
            type='password'
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </From.Group>
        <div className='mb-3'>
          <Button type='submit'>Sign in</Button>
        </div>
        <div className='mb-3'>
          New customer{' '}
          <Link to={`/signup?redirect=${redirect}`}>Create your Account</Link>
        </div>
      </From>
    </Container>
  )
}
