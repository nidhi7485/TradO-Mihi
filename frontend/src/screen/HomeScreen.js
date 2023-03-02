import { Link } from 'react-router-dom'
import data from '../data'
function HomeScreen() {
  return (
    <div>
      <h1>Products</h1>
      <div className='products'>
        {data.products.map((product) => {
          const { id, slug, name, category, price, brand, image, description } =
            product
          return (
            <div key={id} className='product'>
              <Link to={`/product/${slug}`}>
                <img src={image} alt={name} />
              </Link>
              <div className='product-info'>
                <p>{name}</p>
                <p>{price}</p>
                <button type='button'>Add to cart</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default HomeScreen
