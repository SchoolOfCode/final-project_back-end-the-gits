import express from "express"
import cors from "cors"
import logger from "morgan"
import shoppingListRouter from "./routes/shoppinglist.js"
import choresRouter from "./routes/chores.js"

// Creates a server using the express() package
const server = express();

// Middleware: 
// Cors() Allows the front-end to talk to the back-end.
// Allows cross-origin resourse sharing
server.use(cors())

// Morgan() provides helpful run-time messages in the terminal.
server.use(logger("dev"))

// .json() allows the back-end to read and write json objects.
server.use(express.json())

// Path into the shopping list data route.
server.use("/api/v1/shopping-list", shoppingListRouter)

// Path into the chores data route.
server.use("/api/v1/chores", choresRouter)

// server exported to ./bin/www.js to avoid PORT conflict when using Jest Tests (with SuperTest).
export default server