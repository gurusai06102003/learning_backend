import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
app.use(cors({
    origin:process.env.CORS_ORGIN,
    credentials:true
}));
app.use(express.json({limit:"16kb"}));//limit the json file size to 16kb;
app.use(express.urlencoded({extended:true,limit:"16kb"}))//used to get data from urls 
app.use(express.static("public"))//all the assests will be kept in public folder to make use of that we use static
app.use(cookieParser())// this cookie parser is used to access cookies or to set cookies securly in the application

import userRouter from './routes/user.routes.js';
app.use("/api/v1/users",userRouter)
export {app}

//middlewares are used to check weather the condition is satisfied for sending the request and weather to pass the next,
//example: if you are at /instagram and you send a req or res for the server firstly we have to check weather the user is logged in or not and that can be done by middlewares
//there are lot more middlewares to discuss
// now using the middlewares we have to add few paramerters for the method (err,req,res,next)
//next is used to point where to reach after this execution of the middleware.