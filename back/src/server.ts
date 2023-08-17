import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"

import userRoutes from "./infrastructure/routes/user.route"
import authRoutes from "./infrastructure/routes/auth.route"

import { errorHandler } from "./infrastructure/middlewares/errorHandler"

const app = express()
const PORT = process.env.PORT|| 3000 
const mongoURL = process.env.MOONGO_URL || "mongodb://localhost:27017/node_ts_crud"

mongoose
  .connect(mongoURL)
  .then(() => console.log(`Successfully connected to ${mongoURL}`))
  .catch((error) =>
    console.log(`Could not connect to MongoDB. Error: ${error}`)
  )

app.use(cors())
app.use(bodyParser.json())

app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)

// Errors Midleware
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
