const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");

if (process.env.NODE_ENV !== "production") {
    require('dotenv').config({path:"./.env"});
}

const port =process.env.PORT;
const app =express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`);
    
});
app.get("/",(req,res)=>{
    res.send("hello world");
})