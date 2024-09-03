const asyncHandler = (requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err));
    }
}
//requestHandler is a middleware function or routeHandler in express.js application
// A requestHandler is a function that:
// Receives the HTTP request (req), HTTP response (res), and the next middleware function.
// Processes the request, performs some operations (e.g., querying a database, processing data, interacting with an external API, etc.), and then sends a response back to the client using res or passes control to the next middleware using next.
export {asyncHandler}

//this is the try catch method to handle request

// const asyncHandler = (fn)=>async (req,res,next)=>{
//     try {
//         await fn(req,res,next);
//     } catch (error) {
//         res.status(err.code||500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }