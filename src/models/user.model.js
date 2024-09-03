import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrpyt from "bcrypt";
const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        unique:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        unique:true
    },
    fullName:{
        type:String,
        required: true,
        trim:true
    },
    avatar:{
        type:String, // we will be considering this from couldnary
        required:true
    },
    coverImage:{
        type:String,  // we will be considering this from couldnary
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    watchHistoty:[
        {
            type: Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    refreshToken:{
        type:String
    }
},{timestamps:true});

userSchema.pre("save",async function (next){
    if(this.isModified("password")){
        this.password = bcrpyt.hash(password);
        next();
    }
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrpyt.compare(this.password,password)
}

userSchema.methods.genearteAccessToken = function(){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            fullName:this.fullName,
            username:this.username
        },
        process.env.ACCESS_TOKEN_SCRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.genearteRefresToken = function(){
    return jwt.sign(
        {
            _id:this._id
        },
        process.env.REFRESH_TOKEN_SCRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User",userSchema);