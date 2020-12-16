const express = require("express");
const router = express.Router();

// Controller
const {
  renderOperationsForm,
  createNewOperations,
  renderOperations,
} = require("../controllers/operations.controller");

// See Notes
router.get("/notes/see/:id", renderOperations);
// New Note
router.get("/operations/add/:id", renderOperationsForm);

router.post("/operations/new-operations/:id", createNewOperations);



module.exports = router;