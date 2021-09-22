import { User } from '../entity/User'

const Services = require('./Services')

class UserServices extends Services {
  constructor () {
    super(User)
  }
}

module.exports = UserServices
