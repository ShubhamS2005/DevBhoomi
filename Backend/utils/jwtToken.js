export const generateToken=(user,message,statusCode,res)=>{
    const token=user.generateJsonWebToken()
    let cookieName;
    if(user.role==="Admin"){
         cookieName="adminToken";
    }else if(user.role==="Tourist"){
         cookieName="touristToken";
    }else{
         cookieName="guideToken" ;
    }
    res.status(statusCode).cookie(cookieName,token,{
        expires:new Date(
            Date.now()+process.env.COOKIE_EXPIRE*24*60*1000
        ),
        httpOnly:true,
    }).json({
        success:true,
        message,
        user,
        token
    })
}