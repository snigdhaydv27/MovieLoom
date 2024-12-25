const express = require("express");
const {searchPerson, searchMovie, searchTv, getSearchHistory, removeSearchHistory} = require("../controllers/search.controllers");

const router = express.Router();

router.get("/person/:query", searchPerson);
router.get("/movie/:query", searchMovie);
router.get("/tv/:query", searchTv);

router.get("/history", getSearchHistory );
router.delete("/history/:id", removeSearchHistory);

module.exports= router;