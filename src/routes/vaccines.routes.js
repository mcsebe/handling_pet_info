const express = require("express");
const router = express.Router();

// Controller
const {
  renderVaccinesForm,
  createNewVaccines,
  renderVaccines,
} = require("../controllers/vaccines.controller");

// See Notes
router.get("/notes/see/:id", renderVaccines);
// New Note
router.get("/vaccines/add/:id", renderVaccinesForm);

router.post("/vaccines/new-vaccines/:id", createNewVaccines);



module.exports = router;