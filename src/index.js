
import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config()
console.log(process.env.MONGODB_URL);

import connectDB from "./db/index.js";

connectDB()
.then(()=>{
    app.on("error",(err)=>{
        console.log("Error : ", err);
        throw err; 
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`App is listening on port ${process.env.PORT}`);   
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed ", err);
    
})






/*
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import express from "express";
const app = express();

(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error : ", error);
            throw error; 
        })
        app.listen(process.env.PORT, ()=>{`App is listening on port ${process.env.PORT}`})
    } catch (error) {
        console.error("Error",error);
        throw error;
        
    }
})()*/