const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

beforeEach(async () => {
    await User.deleteMany()
})

afterEach(() => {
    console.log('afterEach')
})

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Thiago Barreto',
        email: 'thiagotcb56@gmail.com',
        password: 'crawling485'
    }).expect(201)
})