import jwt  from "jsonwebtoken"

const isAuth=async(req,res,next)=>{
    try {
        let {token}=req.cookies
        if(!token)
        {
            res.status(400).json({message:"User dont have token"})
        }
        let verifytoken=jwt.verify(token,process.env.JWT_SECRET)
         if(!verifytoken)
        {
          return  res.status(400).json({message:"User dont have valid token"})
        }
        req.userId=verifytoken.userId;
        next();
    } catch (error) {
         res.status(500).json({message:`isAuth error ${error}`})
        
    }
}



export default isAuth