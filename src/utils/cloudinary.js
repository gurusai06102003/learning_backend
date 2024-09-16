import { v2 as cloudinary} from "cloudinary";
import fs from 'fs';

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET_KEY 
});

const uploadOnCloudinary = async (localfilepath)=>{
    try {
        //if localfilepath is not found we have to return null
        if(!localfilepath) return null;
        //this file uploading may takes time and to sync this we use await
        //in resource_type we actually can choose which resource we can accept
        const response = await cloudinary.uploader.upload(localfilepath,{
            resource_type: "auto"
        })
        // in response there can be a lots of fields which we can use like response.url to know the url
        //we are going to return the response and they can use anything from this response
        //file has been uplaoded successfully
        console.log("file uploaded successfully ",response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localfilepath);//file uploding caused an error so we unlink the file 
        return null;
    }
}
// we yse multer middleware where ever we have to upload files
export {uploadOnCloudinary};