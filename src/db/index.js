// import dotenv from "dotenv";
import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";
// dotenv.config({
//     path:'./.env'
// })
//here connection of database is done and this connected database
// console.log(DB_NAME);
const connectDB = async()=>{
    try {
        const connectionInstances = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);// async and await is used to make this asnycnhours
        console.log(`mongoDB connected at DB_HOST:${connectionInstances.connection.host}`);//connection is made successfully
    } catch (error) {
        console.log("error in connection of DB:", error);//if any error occur it will catch and display in console_log
        process.exit(1); // there are various uses of process in which this is one. it will exit the process since the database is not connected.
        // instead of 1 there are many other codes which we can use in exit method.
    }
}
// this connected DB will be exported and used in index.js file this ascyn method completely kept in AsyncHandlers.js app
// and to standardise the errors we wrap apiError.js and for every api error handling we will use apiError.js app  
export default connectDB;


// the total try and catch methods can be wrapped up into one file and we can use where we want we can unwrap and use it and these wraps are made in utils.