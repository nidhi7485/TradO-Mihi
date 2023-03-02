import express from 'express'
import data from './data.js'

const app = express()
const port = process.env.PORT || 5000

app.get('/api/products', (req, res) => {
  res.send(data.products)
})

const start = async () => {
  try {
    app.listen(port, console.log(`server is running on port: ${port}...`))
  } catch (error) {
    console.log(error)
  }
}
start()
