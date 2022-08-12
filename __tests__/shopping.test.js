import request from 'supertest'
import server from '../server.js'
import mongoose from  'mongoose'
import { expressJwtSecret } from 'jwks-rsa'

const databaseName = 'test'

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/${databaseName}`
  await mongoose.connect(url, { useNewUrlParser: true })
})
it("shopping list end points", async done => {
    const res = await request.get("/api/v1/shopping-list")
  
expect(respone.status).toBe(200)

    done()
})