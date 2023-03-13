import express from 'express'
import data from './data.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
const app = express()
const port = process.env.PORT || 5000

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db')
  })
  .catch((err) => console.log(err))

app.get('/api/products', (req, res) => {
  res.send(data.products)
})
// /api/products/slug/
app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug)
  if (product) {
    res.send(product)
  } else {
    res.status(400).send({ message: 'product not found!' })
  }
})
const start = async () => {
  try {
    app.listen(port, console.log(`server is running on port: ${port}...`))
  } catch (error) {
    console.log(error)
  }
}
start()
