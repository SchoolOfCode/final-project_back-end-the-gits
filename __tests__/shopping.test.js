import request from 'supertest'
import server from '../server.js'
import mongoose from  'mongoose'
import { expressJwtSecret } from 'jwks-rsa'


it("shopping list end points", async done => {
    const res = await request.get("/api/v1/shopping-list")
  
expect(respone.status).toBe(200)
expect(respone.body).toBe

    done()
})