import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function Product(props) {
  const { product } = props
  return (
    <Card key={product.id}>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className='card-img-top' alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating
          raiting={product.raiting}
          numReviews={product.numReviews}
        ></Rating>
        <Card.Text>Rs{product.price}</Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  )
}
export default Product
