import mongoose from "mongoose";
import validator from "validator";


const journeyScheema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        minlength:[3,"first name must contain atleast three characters "]
    },
    lastname:{
        type:String,
        required:true,
        minlength:[3,"last name must contain atleast three characters "]
    },
    pickup:{
        type:String,
        required:true,
        minlength:[3,"pick up must contain atleast three characters "]
    },
    end:{
        type:String,
        required:true,
        minlength:[3,"end point must contain atleast three characters "]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"please provide a valid email"]
    },
    phone:{
        type:String,
        required:true,
        minlength:[10,"phone number must contain Ten digits "],
        maxlength:[10,"phone number must contain Ten digits "]
    },
    journeyDate:{
        type:Date,
        required:true
    },
    Guide:{
        firstname:{
            type:String,
            required:true,
        },
        lastname:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        }
    },
    GuideId:{
        type:mongoose.Schema.ObjectId,
        required:true,
    },
    touristId:{
        type:mongoose.Schema.ObjectId,
        required:true,
    },
    status:{
        type:String,
        enum:["Pending","Accepted","Rejected"],
        default:"Pending"
    }
    
})
export const Journey=mongoose.model("journey",journeyScheema)