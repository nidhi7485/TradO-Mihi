import express from 'express'
import data from './data.js'

const app = express()
const port = process.env.PORT || 5000

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
