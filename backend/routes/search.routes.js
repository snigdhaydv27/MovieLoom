const express = require("express");
const {searchPerson, searchMovie, searchTv} = require("../controllers/search.controllers");
const { route } = require("./auth.routes");

const router = express.Router();

router.get("/person/:query", searchPerson);
router.get("/movie/:query", searchMovie);
router.get("/tv/:query", searchTv);

router.get("/history", );
router.get("/history/:id", )

module.exports= router;