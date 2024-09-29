import {catchAsyncErrors} from "../middleware/CatchAssyncErrors.js"
import { User } from "../models/user_scheema.js";
import ErrorHandler from "./errormiddleware.js";
import jwt from "jsonwebtoken"
export const isAdminAuthenticated=catchAsyncErrors(async(req,res,next)=>{
     const token=req.cookies.adminToken;
     if(!token){
        return next(new ErrorHandler("Admin not authenticated",400))

     }
     const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
     req.user=await User.findById(decoded.id);
    //  Autherization
     if(req.user.role!=="Admin"){
        return next(new ErrorHandler(`${req.user.role} not autherized for this resourse`,403))
     }
     next()

})

export const isGuideAuthenticated=catchAsyncErrors(async(req,res,next)=>{
    const token=req.cookies.guideToken;
    if(!token){
       return next(new ErrorHandler("Guide not authenticated",400))

    }
    const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
    req.user=await User.findById(decoded.id);
   //  Autherization
    if(req.user.role!=="Guide"){
       return next(new ErrorHandler(`${req.user.role} not autherized for this resourse`,403))
    }
    next()

})

export const isTouristAuthenticated=catchAsyncErrors(async(req,res,next)=>{
   const token=req.cookies.touristToken;
   if(!token){
      return next(new ErrorHandler("Tourist not authenticated",400))

   }
   const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
   req.user=await User.findById(decoded.id);
  //  Autherization
   if(req.user.role!=="Tourist"){
      return next(new ErrorHandler(`${req.user.role} not autherized for this resourse`,403))
   }
   next()

})