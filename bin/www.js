import server from "../server.js";

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {console.log(`Server listening on ${PORT}`)})