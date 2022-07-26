import express from "express"
import cors from "cors"
import logger from "morgan"

const server = express();

server.use(cors())
server.use(logger("dev"))
server.use(express.json())

server.use("/api/v1/shopping-list", (req, res) => {
  res.json("Hello from the server")
})




export default server