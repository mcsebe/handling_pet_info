const express = require("express");
const router = express.Router();

// Controllers
const { renderIndex, renderAbout, renderSearch} = require("../controllers/index.controller");

router.get("/", renderIndex);
router.get("/about", renderAbout);
router.get("/search", renderSearch);

module.exports = router;
