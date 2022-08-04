import server from "../server.js";
import mongoose from "mongoose"

const PORT = process.env.PORT || 3002

mongoose.connect(process.env.MONG_DB)
  .then(() => {
    server.listen(PORT, () => {console.log(`Connected to db and listening on ${PORT}`)})
  })
  .catch((error) => {
    console.log(error)
  })

