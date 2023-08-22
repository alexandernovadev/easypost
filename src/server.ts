import { testPoint } from './infrastructure/controllers/test.controller'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import userRoutes from './infrastructure/routes/user.route'
import authRoutes from './infrastructure/routes/auth.route'
import postRoutes from './infrastructure/routes/post.route'
import testRoutes from './infrastructure/routes/test.route'

import { errorHandler } from './infrastructure/middlewares/errorHandler'

const app = express()
const PORT = process.env.PORT || 3000
const mongoURL =
  process.env.MOONGO_URL || 'mongodb://localhost:27017/node_ts_crud'

mongoose
  .connect(mongoURL)
  .then(() => console.log(`Successfully connected to ${mongoURL}`))
  .catch((error) =>
    console.log(`Could not connect to MongoDB. Error: ${error}`)
  )

const corsOptions = {
  origin: 'http://localhost:5173', 
  optionsSuccessStatus: 200, 
}

app.use(cors())
app.use(bodyParser.json())

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/test', testRoutes)

app.get('/', (req, res) => {
  res.send('<h1> Health  Easy App Success !</h1>')
})


// Errors Midleware
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
