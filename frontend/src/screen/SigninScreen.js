import { Link, useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import From from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Helmet } from 'react-helmet-async'

export default function SigninScreen() {
  const { search } = useLocation
  const redirectInUrl = new URLSearchParams(search).get('redirect')
  const redirect = redirectInUrl ? redirectInUrl : '/'
  return (
    <Container className='small-container'>
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <h2 className='my-3'>Sign in</h2>
      <From>
        <From.Group className='mb-3' controlId='email'>
          <From.Label>Email</From.Label>
          <From.Control type='email' required />
        </From.Group>
        <From.Group className='mb-3' controlId='password'>
          <From.Label>Password</From.Label>
          <From.Control type='password' required />
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
