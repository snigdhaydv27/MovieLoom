const express = require("express");
const { signup, login, logout } = require("../controllers/auth.controllers");
const  middleRoute = require("../middleware/middleRoute");
const { authCheck } = require("../controllers/auth.controllers");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.get("/authCheck",middleRoute, authCheck);

module.exports = router;