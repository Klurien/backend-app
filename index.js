const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const productRoutes = require("./Routes/ProductRoute");
const { applyDefaults } = require("./Models/ProductModel");


if (process.env.NODE_ENV !== "production") {
    require('dotenv').config({path:"./.env"});
}

const port = process.env.PORT;
const dbconnection = process.env.MONGOURL;

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/products" , productRoutes);

// Database connection
mongoose.connect(dbconnection,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(()=>console.log("connected to mongdb"))
.catch((error)=>console.error('error connecting to mongodb'));

app.get('/',(req,res)=>{ 
    res.send("server online")
})


app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`)
    console.log(`database url is ${dbconnection}`)
});


