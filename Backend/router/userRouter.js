import express from "express"
import {UserRegister,login,GetAllGuides,GetUser,GuideLogout,TouristLogout,AddNewAdmin,AdminLogout, GetAllTourist,} from "../controllers/userController.js"
import {isAdminAuthenticated,isGuideAuthenticated,isTouristAuthenticated} from "../middleware/auth.js"

const user_router =express.Router()

// common use
user_router.post("/register",UserRegister)
user_router.post("/login",login)


// Admin Specific
user_router.post("/admin/addnew",isAdminAuthenticated,AddNewAdmin)
user_router.get("/admin/logout",isAdminAuthenticated,AdminLogout)
user_router.get("/admin/me",isAdminAuthenticated,GetUser)


// Tourist Specific
user_router.get("/tourist/me",isTouristAuthenticated,GetUser)
user_router.get("/tourist/logout",isTouristAuthenticated,TouristLogout)
user_router.get("/tourists",GetAllTourist)


// Guide Specific
user_router.get("/Guide/me",isGuideAuthenticated,GetUser)
user_router.get("/Guide/logout",isGuideAuthenticated,GuideLogout)
user_router.get("/guides",GetAllGuides)


export default user_router