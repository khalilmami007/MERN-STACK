const express = require("express");
const cors = require("cors");
const app =express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(
    cors(
        
    )
);

require("./config/mongoose.config");
require("./routes/product.routes")(app);

app.listen(5000,()=>{
    console.log("port live 5000 ");
});
