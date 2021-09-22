import { getConnection } from 'typeorm'

module.exports = async () : Promise <void> => {
  const entities = getConnection('test').entityMetadatas

  for (const entity of entities) {
    const repository = getConnection('test').getRepository(entity.name)
    await repository.clear()
  }
}
