import express from 'express'
// import data from './data.js'
import dotenv from 'dotenv'
import colors from 'colors'
import { connectDB } from './config/db.js'
import seedRouter from './routes/seedRoutes.js'
import productRouter from './routes/productRoutes.js'
import userRouter from './routes/userRoutes.js'
dotenv.config()
connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/seed', seedRouter)
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)

// errorMiddleWare
app.use((err, req, res, next) => {
    res.status(500).send({ massage: err.message })
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})