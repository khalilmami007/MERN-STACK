const express = require("express");
const app = express();

require("dotenv").config()
const port = process.env.PORT
    
require("./config/mongoose.config");
    //middleware 
app.use(express.json(), express.urlencoded({ extended: true }));

const JokeRoutes = require('./routes/Jokes.routes');
JokeRoutes(app);



app.listen(port, () => {
    console.log(`The server is all fired up on port ${port}`)
});
