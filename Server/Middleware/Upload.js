import multer from "multer"
//handle file upload
import path from "path"

//configure storage setting
const Storage=multer.diskStorage(
    {   
        //Uploaded file ko server ke kis folder me save karna hai.
        destination:(req,file,cb)=>{
           cb(null, "Public/ProjectMedia")
        } ,
        //Server par file ka naam kya rakhe
        filename:(req,file,cb)=>{
            const FileName = Date.now() + "-" + file.originalname
            cb(null, FileName)
        }
      }
)

const upload = multer({ Storage })

export {upload}
