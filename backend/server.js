import express from 'express'
import data from './data.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
const app = express()
const port = process.env.PORT || 5000
import seedRouter from './routes/seedRoutes.js'
import productRouter from './routes/productRoutes.js'
import userRouter from './routes/userRoutes.js'
// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db')
  })
  .catch((err) => console.log(err))

app.use('/api/seed', seedRouter)
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)
// /api/products/slug/
app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug)
  if (product) {
    res.send(product)
  } else {
    res.status(400).send({ message: 'product not found!' })
  }
})
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})
const start = async () => {
  try {
    app.listen(port, console.log(`server is running on port: ${port}...`))
  } catch (error) {
    console.log(error)
  }
}
start()
