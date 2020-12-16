const express = require("express");
const router = express.Router();

// Controller
const {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  renderSeeForm,
  updateNote,
  renderEditForm2,
  renderEditForm3,
  renderSeeInfoForm,
  deleteNote
} = require("../controllers/notes.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

// New Note
router.get("/notes/add", isAuthenticated, renderNoteForm);

router.post("/notes/new-note", isAuthenticated, createNewNote);

// Get All Notes
router.get("/notes", renderNotes);

// Edit Notes
router.get("/notes/edit/:id", renderEditForm);

router.put("/notes/edit-note/:id", updateNote);

// See Notes
router.get("/notes/see/:id", renderSeeForm);

// See Notes
router.get("/notes/see-info/:id", renderSeeInfoForm);

// Delete Notes
router.delete("/notes/delete/:id", isAuthenticated, deleteNote);


router.get("/vaccines/add/:id", renderEditForm2);

router.get("/operations/add/:id", renderEditForm3);

module.exports = router;
