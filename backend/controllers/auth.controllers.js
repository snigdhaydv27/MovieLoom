const User = require("../models/user.models");
const bcryptjs = require("bcryptjs");
const generateTokenAndSetCookie = require("../utils/generateToken");

//signup
async function signup(req, res) {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: "Invalid Email" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Password must be atleast 6 characters",
        });
    }

    const existingUserByEmail = await User.findOne({ email: email });
    if (existingUserByEmail) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }

    const existingUserByUsername = await User.findOne({ username: username });
    if (existingUserByUsername) {
      return res
        .status(400)
        .json({ success: false, message: "Username already exists" });
    }

    //password hashing
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const POFILE_PIC = ["/profile1.jpg", "/profile2.jpg", "/profile3.jpg"];
    const image = POFILE_PIC[Math.floor(Math.random() * POFILE_PIC.length)];

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      image,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res
        .status(201)
        .json({ success: true, message: "User registered successfully" });
    }
  } catch (error) {
    console.log("Error in signup controller: " + error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

//login
async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid credentials" });
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid credentials" });
    }
    generateTokenAndSetCookie(user._id, res);
    res
      .status(200)
      .json({ success: true, message: "User logged in successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

//logout
async function logout(req, res) {
  try {
    res.clearCookie("jwt-ZenG");
    res
      .status(200)
      .json({ success: true, message: "User logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller: " + error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

async function authCheck(req, res) {
	try {
		console.log("req.user:", req.user);
		res.status(200).json({ success: true, user: req.user });
	} catch (error) {
		console.log("Error in authCheck controller", error.message);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
}

module.exports = { signup, login, logout, authCheck };
