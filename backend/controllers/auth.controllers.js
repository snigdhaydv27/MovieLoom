const User = require("../models/user.models");

async function signup(req,res) {
    try {
        const {email,password,username} = req.body;

        if(!email || !password || !username){
            return res.status(400).json({success:false, message:"All fields are required"});
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({success:false, message:"Invalid Email"});
        }

        if(password.length < 6){
            return res.status(400).json({success:false, message:"Password must be atleast 6 characters"});
        }

        const existingUserByEmail=await User.findOne({email:email});
        if(existingUserByEmail){
            return res.status(400).json({success:false, message:"Email already exists"});
        }

        const existingUserByUsername=await User.findOne({username:username});
        if(existingUserByUsername){
            return res.status(400).json({success:false, message:"Username already exists"});
        }
        
        const POFILE_PIC = ["/profile1.jpg","/profile2.jpg","/profile3.jpg"];
        const image = POFILE_PIC[Math.floor(Math.random()*POFILE_PIC.length)];

        const newUser=new User({
             username:username,
             email:email,
             password:password,
             image

        });
        await newUser.save();
        
     } catch (error) {
        console.log("Error in signup controller: "+ error.message);
        res.status(500).json({success:false, message:"Internal server error"});
    }
}
async function login(req,res) {
    res.send("login page");
}
async function logout(req,res) {
    res.send("Logout page");
}

module.exports = {signup,login,logout};


