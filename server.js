import express from "express"
import cors from "cors"
import logger from "morgan"
import shoppingListRouter from "./routes/shoppinglist.js"


const server = express();



server.use(cors())
server.use(logger("dev"))
server.use(express.json())

server.use("/api/v1/shopping-list", shoppingListRouter)


export default server