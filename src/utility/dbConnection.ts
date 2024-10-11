import mongoose from "mongoose";

 export function connectToDatabase(){
    mongoose.connect(process.env.DATABASE_URL!).then(()=>{
        console.log("Connected to database");
    }).catch(()=>{
        console.log("Failed to connect to database");
    })
}