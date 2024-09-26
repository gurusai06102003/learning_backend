import {asyncHandler} from '../utils/AsyncHandler.js';
console.log("this is user controller pge");

const registerUser = asyncHandler (async(req,res)=>{
    // setTimeout(greet,200);
    return res.status(200).json({
        message:"ok"
    })
    
})


export {registerUser};