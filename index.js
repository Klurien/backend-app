const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const productRoutes = require("./Routes/ProductRoute");
const { applyDefaults } = require("./Models/ProductModel");

// Move dotenv config to the top BEFORE accessing environment variables
if (process.env.NODE_ENV !== "production") {
    require('dotenv').config({path:"./.env"});
}

const port = process.env.PORT;
const dbconnection = process.env.MONGOURL;

// Initialize Express app BEFORE using it
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.json()); // Your duplicate - keeping it as you had it

// Your routes (keeping both as you had them)
app.use("/api/products" , productRoutes);



// Create API points


// Database connection
mongoose.connect(dbconnection,{
    useNewUrlParser: true, // Fixed typo: useNewUrl -> useNewUrlParser
    useUnifiedTopology: true
})
.then(()=>console.log("connected to mongdb"))
.catch((error)=>console.error('error connecting to mongodb'));

app.get('/',(req,res)=>{ 
    res.send("server online")
})

// Server startup (keeping your duplicate but commenting out one)
app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`)
    console.log(`database url is ${dbconnection}`)
});

// Commenting out the duplicate listen to prevent error, but keeping your code
/*
app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`);
});
*/

// def routs (keeping your comment as is)
