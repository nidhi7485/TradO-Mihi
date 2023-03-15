import express from 'express'
import Product from '../models/ProductModel.js'
import data from '../data.js'
import User from '../models/userModel.js'
const seedRouter = express.Router()

seedRouter.get('/', async (req, res) => {
  await Product.deleteMany()
  const productCreated = await Product.insertMany(data.products)
  await User.deleteMany()
  const userCreated = await User.insertMany(data.users)
  res.send({ productCreated, userCreated })
})

export default seedRouter
