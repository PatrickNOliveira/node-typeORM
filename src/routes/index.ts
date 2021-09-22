import * as bodyParser from 'body-parser'
const UserRoutes = require('./UserRoutes')
module.exports = app => {
  app.use(
    bodyParser.json(),
    UserRoutes
  )
}
