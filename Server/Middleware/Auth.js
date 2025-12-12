import dotenv from "dotenv"
import jwt from "jsonwebtoken"

const auth=async(req,res,next)=>{
   try{
     //“Bearer” isliye likhte hain kyunki HTTP Authorization header ka standard format hota hai
    //Yeh token ek bearer-token hai jiske paas token hoga wo access pa lega
    const authHeader = req.headers.authorization;
    //.headers.authorization request ke header me rakha hua wo value hoti hai jisme client apna login token bhejta hai.


      //check if one get the header or not 
      if(!authHeader){
        res.status(401).json({message:"Header is missing!"})
      }

     const parts = authHeader.split(" ");
      //split token
      const token=parts[1]

      //check if one get the token
      if(!token) {
        res.status(401).json({message:"Didn't got the token"})
    }

      //verifying the token
      let verifieduser = jwt.verify(token,JWT_SECRET_TOKEN)
      
     //User ko request object me store krna h 
      req.user = verifieduser;

      next()

   }catch(error){
      //forbidden that is not allowed
            res.status(403).json({
            message:"Cannot provide access!",error
            
        })
   }

}

const authadmin=(req,res,next)=>{
    if(req.user.role!="admin"){
        res.status(403).json({
             message:"Cannot provide access!This function is only for admins."
        })
    }
    next()
}
export {auth,authadmin}
//steps include
//taking token from req.header
//checking whether one got or not
//spliting and extracting token
//checking one got token or not
//verifying the token
//store user in req obj
//call next 