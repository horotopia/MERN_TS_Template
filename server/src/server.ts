import express, { Express } from 'express'
import mongoose, { ConnectOptions } from 'mongoose'
import cors from 'cors'
import * as dotenv from 'dotenv'
// import { todoRoutes } from './routes/todoRoutes'

dotenv.config()

const app:Express = express()
const port: string | number = process.env.PORT || 8080
const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.itocvo7.mongodb.net/todoList?retryWrites=true&w=majority`

app.use(cors())
// app.use(todoRoutes)

mongoose
    .connect(uri)
    .then(() =>
        app.listen(port, () =>
            console.log(`Server running on http://localhost:${port}`)
        )
    )
    .catch(error => {
        throw error
    })