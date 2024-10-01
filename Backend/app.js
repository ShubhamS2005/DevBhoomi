import express from "express"
import { config } from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";
import cloudinary from "cloudinary"
import {errormiddleware} from "./middleware/errormiddleware.js"
import user_router from "./router/userRouter.js";
import appointment_router from "./router/journeyRouter.js";
import { User } from "./models/user_scheema.js";
import twilio from "twilio"
import crypto from "crypto"
// import router from "./router/chatRoute.js"
const app=express();

config({path:"./config/config.env"})

const port=process.env.PORT || 3000
const uri=process.env.DATABASE_URI

app.use(
    cors({
        origin:[process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
        methods:["GET","POST","PUT","DELETE"],
        credentials:true
    })
)
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    })
  );

// app listening
app.listen(port,()=>{
    console.log(`backend running at ${port}`)
})

// app use
app.use("/api/v1/user",user_router)
app.get("/verify",async(req,res)=>{
    const updateInfo=await User.updateOne({_id:req.query.id},{$set:{isVerified:1}})
    
    console.log(updateInfo);
    res.redirect(`${process.env.FRONTEND_URL}`)
})
app.use("/api/v1/journey",appointment_router)

// app.use("/api/v1/message",messageRouter)



// Database connect
try {
    mongoose.connect(uri);
    console.log("database connected")
} catch (error) {
    console.log(`error:${err}`)
}


// using cloudinary
cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
    
})

// Twilio configuration
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Store OTP temporarily 
let otps = {};

// Function to generate OTP
const generateOTP = () => {
    return crypto.randomInt(100000, 999999).toString(); // 6 digit OTP
};


// Routes
// app.use('/api/chat', router);

// Set up Socket.io (optional)
// const server = require('http').createServer(app);
// const io = require('socket.io')(server, {
//   cors: {
//     origin: '*',
//   }
// });

// io.on('connection', socket => {
//     console.log('User connected');
//     socket.on('sendMessage', (message) => {
//       socket.broadcast.emit('receiveMessage', message);
//     });
//   });



// Route to send OTP
app.post('/send-otp', async (req, res) => {
    const { phoneNumber } = req.body; // Phone number of the user
    const otp = generateOTP();

    // Store OTP with a timeout or in a DB
    otps[phoneNumber] = otp;

    try {
        // Send OTP via SMS
        await client.messages.create({
            body: `Your OTP for the drive by the guide is ${otp}.`,
            from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio number
            to: phoneNumber
        });

        return res.status(200).json({ message: 'OTP sent successfully!' });
    } catch (error) {
        console.error('Error sending OTP:', error);
        return res.status(500).json({ message: 'Error sending OTP' });
    }
});

// Route to verify OTP
app.post('/verify-otp', (req, res) => {
    const { phoneNumber, otp } = req.body;

    if (otps[phoneNumber] && otps[phoneNumber] === otp) {
        delete otps[phoneNumber]; // Remove OTP after successful verification
        return res.status(200).json({ message: 'OTP verified successfully!' });
    }

    return res.status(400).json({ message: 'Invalid OTP' });
});


// middleware error
app.use(errormiddleware)