const jwt = require('jsonwebtoken');
const { User} = require('../models/user.models');
const {ENV_VAR}= require('../config/envVar');

async function middleRoute(req, res, next){
    const token = req.cookies('jwt-ZenG');
    if(!token) return res.status(401).json({succeess: false, message: 'Access denied. No token provided'});
    try{
        const decoded = jwt.verify(token, ENV_VAR.JWT_SECRET);
        if(!decoded) return res.status(400).json({succeess: false, message: 'Invalid token'});  
        const user = await User.findById(decoded.userId).select('-password');
        if(!user) return res.status(400).json({succeess: false, message: 'User not found'});
        req.user = user;
        next();
    }
    catch(err){
        res.status(400).json({succeess: false, message: 'Invalid token'});
    }
};

module.exports = middleRoute;
