import express from "express"
import cors from "cors"
import logger from "morgan"
import shoppingListRouter from "./routes/shoppinglist.js"
import {expressjwt} from "express-jwt";
import JwksRsa from "jwks-rsa";


const server = express();

const checkJwt = expressjwt({
    secret: JwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${process.env.AUTH0_API_DOMAIN}.us.auth0.com/.well-known/jwks.json`
    }),
  
    audience: process.env.AUTH0_API_IDENTIFIER,
    issuer: [`https://${process.env.AUTH0_API_DOMAIN}.us.auth0.com/`],
    algorithms: ['RS256']
  });


server.use(checkJwt)

server.use(cors())
server.use(logger("dev"))
server.use(express.json())

server.use("/api/v1/shopping-list", shoppingListRouter)


export default server