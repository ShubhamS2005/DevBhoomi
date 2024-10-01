import express from "express"
import {UserRegister,login,GetAllGuides,GetUser,GuideLogout,TouristLogout,AddNewAdmin,AdminLogout, GetAllTourist, UpdateUserElement, GetGuide, sendVCMail,} from "../controllers/userController.js"
import {isAdminAuthenticated,isGuideAuthenticated,isTouristAuthenticated} from "../middleware/auth.js"
import { GetAllMessages, sendMessage } from "../controllers/feedbackController.js"
import { DeleteJourney, getAllJourneys, GetUserJourney, postJourney, UpdateJourneysStatus } from "../controllers/journeyController.js"

const user_router =express.Router()

// common use
user_router.post("/register",UserRegister)
user_router.post("/login",login)
user_router.put("/update/:id",UpdateUserElement)



// Admin Specific
user_router.post("/admin/addnew",isAdminAuthenticated,AddNewAdmin)
user_router.get("/admin/logout",isAdminAuthenticated,AdminLogout)
user_router.get("/admin/me",isAdminAuthenticated,GetUser)



// Tourist Specific
user_router.get("/tourist/me",isTouristAuthenticated,GetUser)
user_router.get("/tourist/logout",isTouristAuthenticated,TouristLogout)
user_router.get("/tourists",GetAllTourist)
user_router.get("/me",isTouristAuthenticated,GetUser)
user_router.get("/get-guide/:id",GetGuide)
user_router.get("/send-mail/:id",sendVCMail)





// Guide Specific
user_router.get("/Guide/me",isGuideAuthenticated,GetUser)
user_router.get("/Guide/logout",isGuideAuthenticated,GuideLogout)
user_router.get("/guides",GetAllGuides)



// Feedback
user_router.post("/sendMessage",sendMessage)
user_router.get("/getallmessages",isAdminAuthenticated,GetAllMessages)





export default user_router