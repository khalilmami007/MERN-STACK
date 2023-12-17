const mongoose = require("mongoose");

const dbname = process.env.db

mongoose.connect(`mongodb://127.0.0.1:27017/${dbname}`)
.then(() => console.log(`Established a connection to the database: ${dbname}`))
.catch(err => console.log('Something went wrong when connecting to the database ', err));