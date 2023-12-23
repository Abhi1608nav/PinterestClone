const multer=require("multer");
const {v4:uuidv4}=require("uuid");
const path = require("path");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/uploads') // Destination folder for uploads
    },
    filename: function (req, file, cb) {
        const fileextension = path.extname(file.originalname);
      const uniqueFilename = uuidv4(); // Generating a unique filename using uuidv4
      cb(null, uniqueFilename + fileextension); // use the unique filename for the uploaded file
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports=upload;