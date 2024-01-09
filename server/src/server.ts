import express, { type Express } from 'express'
import mongoose from 'mongoose'
import * as bodyParser from 'body-parser'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { logger } from './middleware/logger'
import swaggerUi from 'swagger-ui-express'
import * as swaggerDoc from '../dist/swagger-output.json'
import { type SwaggerTypes } from './interfaces/swagger'

// import { todoRoutes } from './routes/todoRoutes'

dotenv.config()

const app: Express = express()
const port: number = parseInt(process.env.PORT ?? '8080', 10)
const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.itocvo7.mongodb.net/todoList?retryWrites=true&w=majority`
const swagger: SwaggerTypes = swaggerDoc

app.use(cors())
app.use(bodyParser.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swagger));

// app.use(todoRoutes)

mongoose
  .connect(uri)
  .then(() =>
    app.listen(port, () =>{
      console.log('Connexion à Mongo établie.')      
      logger.info(`Server running on http://localhost:${port}`)
    }),
  )
  .catch((err) => {
    logger.error(err)
    throw err
  })
