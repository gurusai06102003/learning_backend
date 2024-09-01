import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async()=>{
    try {
        const connectionInstances = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`mongoDB connected at DB_HOST`,connectionInstances.connection.host);
    } catch (error) {
        console.log("error in connection of DB:", error);
        process.exit(1);
    }
}

export default connectDB;