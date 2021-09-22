// eslint-disable-next-line no-unused-vars
import { EntityTarget, Entity, Repository, EntityOptions, getConnection, createConnection } from 'typeorm'
import { validate } from 'class-validator'

class Services {
  private repository: Repository<{ (options?: EntityOptions): ClassDecorator; (name?: string, options?: EntityOptions): ClassDecorator }>;

  constructor (repository: EntityTarget<typeof Entity>) {
    createConnection(process.env.NODE_ENV).then(() => {
      this.repository = getConnection(process.env.NODE_ENV).getRepository(repository)
    })
  }

  async allData () {
    return this.repository.find()
  }

  async oneData (id:number) {
    return this.repository.findOne(id)
  }

  async insertData (data:any) {
    const dataToCreate = this.repository.create(data)
    const errors = await validate(dataToCreate)
    const listErrors = []
    if (errors.length > 0) {
      errors.map(item => {
        listErrors.push({ error: item.constraints })
      })
      return listErrors
    }
    return this.repository.save(data)
  }

  async updateData (id:number, data:any) {
    await this.repository.update(id, data)
    return this.repository.findOne(id)
  }

  async remove (id:number) {
    const dataToRemove = await this.repository.findOne(id)
    if (dataToRemove) {
      return await this.repository.remove(dataToRemove)
    } else {
      return { error: 'Recurso não encontrado' }
    }
  }
}

module.exports = Services
