import {User} from "../models/user_scheema.js"
import {catchAsyncErrors} from "../middleware/CatchAssyncErrors.js"
import ErrorHandler from "../middleware/errormiddleware.js"
import {generateToken} from "../utils/jwtToken.js"
import cloudinary from "cloudinary"
import nodemailer from "nodemailer"



export const UserRegister=catchAsyncErrors(async(req,res,next)=>{
    if (!req.files || Object.keys(req.files).length === 0) {
        return next(new ErrorHandler("User Avatar Required!", 400));
      }
    const { userAvatar } = req.files;
    const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
    if (!allowedFormats.includes(userAvatar.mimetype)) {
        return next(new ErrorHandler("File Format Not Supported!", 400));
    }
    const cloudinaryResponse = await cloudinary.uploader.upload(
        userAvatar.tempFilePath
      );
    if (!cloudinaryResponse || cloudinaryResponse.error) {
        console.error(
          "Cloudinary Error:",
          cloudinaryResponse.error || "Unknown Cloudinary error"
        );
        return next(
          new ErrorHandler("Failed To Upload Doctor Avatar To Cloudinary", 500)
        );
    }
    

    const{firstname,lastname,email,phone,password,role}=req.body
    if(!firstname||!lastname||!email||!phone||!password||!role){
        return next(new ErrorHandler("Please fill full form",400));
    }
    const user=await User.findOne({email})
    if(user){
        return next(new ErrorHandler("User Already registered",400));
    }
    else{
        const userData=await User.create({
            firstname,lastname,email,phone,password,role,
            userAvatar: {
                public_id: cloudinaryResponse.public_id,
                url: cloudinaryResponse.secure_url,
              },
        })
        // generateToken(user,"user registered",200,res)
        sendVerifymail(firstname,lastname,email,userData._id)
        res.status(200).json({
            success:true,
            message:"User Registered,Verify your mail"
        })
    }
})

//Send Mail
export const sendVerifymail=async(firstname,lastname,email,user_id)=>{
    try {
        const transpoter=nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:465,
            requireTLS:true,
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.PASSWORD_USER
            }
        });
        const mailoptions={
            from:process.env.EMAIL_USER,
            to:email,
            subject:'Verification of DevBhoomi',
            html:`<p>Hii ${firstname} ${lastname} ,this email is send to inform you that your account is created on DevBhoomi please verify your account by click here <a href="http://127.0.0.1:${process.env.PORT}/verify?id=${user_id}">Verify</a> </p>`
        }

        transpoter.sendMail(mailoptions,function(error,info){
            if(error){
                console.log(error);
            }
            else{
                console.log("Email has been sent:- ",info.response);
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const login=catchAsyncErrors(async(req,res,next)=>{
    const{email,password,role,confirmPassword}=req.body;
    if(!email||!password||!confirmPassword||!role){
        return next(new ErrorHandler("Please Provide all details",400));
    }
    if(password!==confirmPassword){
        return next(new ErrorHandler("Password and confirm password not same",400));
    }
    const user=await User.findOne({email}).select("+password")
    if(!user){
        return next(new ErrorHandler("Invalid Email or password",400));
    }
    const isPasswordMatched=await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Email or password",400));
    }
    
    if(role!==user.role){
        return next(new ErrorHandler("User with this role not found",400));
    }

    if(user.isVerified===0){
        return next(new ErrorHandler("User is not verifyied please click on link send to you"));
    }
    generateToken(user,"User Logged in Successfully",200,res)
})

export const AddNewAdmin=catchAsyncErrors(async(req,res,next)=>{
    if (!req.files || Object.keys(req.files).length === 0) {
        return next(new ErrorHandler("User Avatar Required!", 400));
      }
    const { userAvatar } = req.files;
    const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
    if (!allowedFormats.includes(userAvatar.mimetype)) {
        return next(new ErrorHandler("File Format Not Supported!", 400));
    }
    const cloudinaryResponse = await cloudinary.uploader.upload(
        userAvatar.tempFilePath
      );
    if (!cloudinaryResponse || cloudinaryResponse.error) {
        console.error(
          "Cloudinary Error:",
          cloudinaryResponse.error || "Unknown Cloudinary error"
        );
        return next(
          new ErrorHandler("Failed To Upload Doctor Avatar To Cloudinary", 500)
        );
    }
    


    const{firstname,lastname,email,phone,password}=req.body
    if(!firstname||!lastname||!email||!phone||!password){
        return next(new ErrorHandler("Please fill full form",400));
    }
    const isRegistered=await User.findOne({email})
    if(isRegistered){
        return next(new ErrorHandler(`${isRegistered.role} with this email exists`,400));
    }
    await User.create(
        {firstname,lastname,email,phone,password,role:"Admin",isVerified:1,
        userAvatar:{
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url,
          }
        }
    )
    res.status(200).json({
        success:true,
        message:"New Admin is added"
    })

})

export const GetAllGuides=catchAsyncErrors(async(req,res,next)=>{
    const Guides=await User.find({role:"Guide"})
    res.status(200).json({
        success:true,
        Guides
    })
})

export const GetAllTourist=catchAsyncErrors(async(req,res,next)=>{
    const Tourists=await User.find({role:"Tourist"})
    res.status(200).json({
        success:true,
        Tourists
    })
})

export const GetUser=catchAsyncErrors(async(req,res,next)=>{
    const user=req.user
    res.status(200).json({
        success:true,
        user
    })

})

export const AdminLogout=catchAsyncErrors(async(req,res,next)=>{
    res.status(200).cookie("adminToken","",{
        httpOnly:true,
        expires:new Date(Date.now()),
        
    }).json({
        success:true,
        message:"Admin Log out succesfully"
    })
})

export const TouristLogout=catchAsyncErrors(async(req,res,next)=>{
    res.status(200).cookie("touristToken","",{
        httpOnly:true,
        expires:new Date(Date.now())
    }).json({
        success:true,
        message:"Tourist Log out succesfully"
    })
})

export const GuideLogout=catchAsyncErrors(async(req,res,next)=>{
    res.status(200).cookie("guideToken","",{
        httpOnly:true,
        expires:new Date(Date.now()),
        
    }).json({
        success:true,
        message:"Guide Log out succesfully"
    })
})
