// eslint-disable-next-line no-unused-vars
import { NextFunction, Request, Response } from 'express'
const UserService = require('@services/UserService')
const userService = new UserService()

class UserController {
  static async all (request: Request, response: Response, next: NextFunction) {
    try {
      return response.status(200).json(await userService.allData())
    } catch (e) {
      return response.status(500).json(e.message)
    }
  }

  static async one (request: Request, response: Response, next: NextFunction) {
    try {
      return response.status(200).json(await userService.oneData())
    } catch (e) {
      return response.status(500).json(e.message)
    }
  }

  static async update (request: Request, response: Response, next: NextFunction) {
    try {
      return response.status(200).json(await userService.updateData(request.params.id, request.body))
    } catch (e) {
      return response.status(500).json(e.message)
    }
  }

  static async create (request: Request, response: Response, next: NextFunction) {
    try {
      const createUser = await userService.insertData(request.body)
      return response.send(createUser)
    } catch (e) {
      return response.status(500).json(e.message)
    }
  }

  static async delete (request: Request, response: Response, next: NextFunction) {
    try {
      const remove = await userService.remove(request.params.id)
      if (remove.error) {
        return response.status(404).json(remove.error)
      } else {
        return response.status(200).json({
          message: 'Removido com sucesso',
          removedData: remove
        })
      }
    } catch (e) {
      return response.status(500).json(e.message)
    }
  }
}

module.exports = UserController
