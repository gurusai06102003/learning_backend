import multer from "multer";

//temp we are going to store the files in our local storage. we can store files in two storages like memory and disk
// since memory can be out of limit so we use disk storage but its not mandatory to use disk only we can use memory also
const storage = multer.diskStorage({
    // req as we know comes from req.body and file is the extra parameter in which this middleware comes and cb is just a callback function
    // we are going to store files in local storage at public folder in temp folder
    // first parameter in cb is null it used to handel error since now we don't have to handle any errors we do null
    destination: function (req, file, cb) {
      cb(null, './public/temp')
    },

    // for saving the filename if we want to save every file with a unique name then we can use const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    // but as of now we just add file original name itself as a filename to save
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  })
  
export const upload = multer({ storage })