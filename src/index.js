//exporting .env files for at the starting of the server 
//since it is important to give all the env files to the required desitnation before it is executed.
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.on((error)=>{
        console.log("error encountered: ",error);
    });
    app.listen(process.env.PORT,()=>{
        console.log(`server is running at ${process.env.PORT}`);
        
    })
})
.catch((error)=>{
    console.log(`error in connection of DB: ${error}`);
    
})

// this is the process to connect db and run api servers here only
// import express from "express";
// const app = express()
// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         app.on("error",(error)=>{
//             console.log("Error: ",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listing at ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR: ",error);
//         throw error
//     }
// })()