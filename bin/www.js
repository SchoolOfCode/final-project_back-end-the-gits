import server from "../server.js";
//mongoose is a developer package to easily access mongodb
import mongoose from "mongoose"

//Tells the port to either listen to the heroku server or localhost:3002
const PORT = process.env.PORT || 3002


//Connecting to mongoDb database, then once connetcted, console logging the port number it is listening to
mongoose.connect(process.env.MONG_DB)
  .then(() => {
    //once connected to the db, allows server to connect to the PORT
    server.listen(PORT, () => {console.log(`Connected to db and listening on ${PORT}`)})
  })
  .catch((error) => {
    console.log(error)
  })

