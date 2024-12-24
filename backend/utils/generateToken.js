const jwt = require('jsonwebtoken');
const ENV_VAR = require('../config/envVar');

const generateTokenAndSetCookie = (userId,res) => {
    const token = jwt.sign({userId},ENV_VAR.JWT_SECRET,{
        expiresIn: '12d'
    });
    const options = {
        expires: new Date(
            Date.now() + 30 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true, //prevent javascript from accessing the cookie
        sameSite: "strict", // cookie will only be sent in a first-party context
        secure: ENV_VAR.NODE_ENV !== "development",
    }
    res.cookie('jwt-ZenG',token,options);
    return token;
}

module.exports= generateTokenAndSetCookie;