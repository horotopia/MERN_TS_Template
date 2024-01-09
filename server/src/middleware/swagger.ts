import swaggerAutogen from "swagger-autogen"

const doc = {
  info: {
    version: 'v1.0.0',
    title: 'Your API',
    description: 'Description of your API',
  },
  host: `localhost:${process.env.PORT}`, // Mettez le port approprié
  basePath: '/',
  schemes: ['http'],
}

const outputFile = '../swagger-output.json'
const endpointsFiles = ['../../dist/routes/*.js', '../../dist/models/*.js', './dist/controllers/*.js'] // Mettez le chemin vers votre fichier app.ts/server.ts

void swaggerAutogen(outputFile, endpointsFiles, doc)