import express from 'express'
import data from './data.js'
import dotenv from 'dotenv'
import colors from 'colors'
import { connectDB } from './config/db.js'
dotenv.config()

const app = express()

connectDB()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.get('/api/products/slug/:slug', (req, res) => {
    const product = data.products.find((x) => x.slug === req.params.slug)
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({ message: 'Product Not Found' })
    }
})

// Utilize id from product data
app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({ message: 'Product Not Found' })
    }
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})