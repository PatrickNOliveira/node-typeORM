import { User } from '../../entity/User'
const { createConnection, getConnection } = require('typeorm')
const bcrypt = require('bcryptjs')
const truncate = require('../../utils/truncate/trucante')

describe('User', () => {
  beforeAll(async () => {
    await createConnection('test')
  })

  afterAll(() => {
    getConnection('test').close()
    truncate()
  })

  beforeEach(async () => {
    await truncate()
  })

  it('should ', async () => {
    // Cria um usuário no banco de dados sqlite
    const userData = {
      firstName: 'Patrick',
      lastName: 'Nascimento',
      email: 'patrickndeoliveira@gmail.com',
      password: await bcrypt.hash('123', 12)
    }
    // Insere o usuário no campo de dados
    const user = await getConnection('test').getRepository(User).create(userData)
    // Espera que a comparação do bcrypt entre as senhas do usuário e o valor digitado manualmente (123)
    // retorne true, ou seja, que elas sejam equivalentes
    expect(await bcrypt.compare('123', user.password)).toBe(true)
  })
})
