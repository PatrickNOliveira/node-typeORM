import 'reflect-metadata'
const { createConnection } = require('typeorm')
const express = require('express')
const routes = require('./routes')
require('dotenv').config()

createConnection(process.env.NODE_ENV).then(async connection => {
  // create express app
  const app = express()
  routes(app)

  // start express server
  app.listen(3000)
}).catch(error => console.log(error))
