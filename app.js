const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routebooks = require("./routes/books");
require("dotenv/config")

app.use(express.urlencoded({ extended:true}));
app.use(express.json());


app.use("/api/books", routebooks);

app.get(("/"),(req,res)=>{
res.send("Get Working, ");
});



mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true, useUnifiedTopology: true },()=>
console.log("Connected to Database")
);


const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>console.log(`Listening on port ${PORT}`));