import bcrypt from 'bcryptjs'

const data = {
  products: [
    {
      // id: 1,
      slug: '45mm Apple watch',
      name: '45mm Apple watch',
      category: 'smartWatch',
      price: 45000,
      brand: 'apple',
      image: '/images/sWtch.jpg',
      description: 'high quality watch',
      countInStock: 1,
      numReviews: 0,
    },
    {
      // id: 2,
      slug: 'Harley-Davidson Nightster',
      name: 'Harley-Davidson Nightster',
      category: 'bike',
      price: 1499000,
      brand: 'Harley-Davidson',
      image: '/images/Hd-1.jpg',
      description: 'Equipped with modern features',
      countInStock: 1,
      numReviews: 0,
    },
    {
      // id: 3,
      slug: 'Harley-Davidson Sportster S',
      name: 'Harley-Davidson Sportster S',
      category: 'bike',
      price: 1600000,
      brand: 'Harley-Davidson',
      image: '/images/Hd-2.jpg', //679px*829px
      description: 'perfect for the olrando traffic',
      countInStock: 1,
      numReviews: 0,
    },
    {
      // id: 4,
      slug: 'Glimpses of a Golden Childhood',
      name: 'Glimpses of a Golden Childhood',
      category: 'book',
      price: 1300,
      brand: 'book',
      image: '/images/book.jpg',
      description: 'fascinating, entertaining and inspiring stories',
      countInStock: 1,
      numReviews: 0,
    },
  ],
  users: [
    {
      name: 'user',
      email: 'user@gmail.com',
      password: bcrypt.hashSync('secret'),
      isAdmin: true,
    },
    {
      name: 'user1',
      email: 'user1@gmail.com',
      password: bcrypt.hashSync('secret'),
      isAdmin: false,
    },
  ],
}
export default data
