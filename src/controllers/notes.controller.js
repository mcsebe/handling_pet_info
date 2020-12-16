const notesCtrl = {};

// Models
const Note = require("../models/Note");
const Vaccines = require("../models/Vaccines")
const Operations = require("../models/Operations")
const User = require('../models/User');

notesCtrl.renderNoteForm = (req, res) => {
  res.render("notes/new-note");
};

notesCtrl.createNewNote = async (req, res) => {
  const obs_med = " ";
  const { rut_usr, name_pet, type_pet, breed_pet, mark, color, date_born} = req.body;
  const errors = [];
  if (!rut_usr) {
    errors.push({ text: "Porfavor ingresa el rut del usuario." });
  }
  if (!name_pet) {
    errors.push({ text: "Porfavor ingresa el nombre de la mascota." });
  }
  if (!type_pet) {
    errors.push({ text: "Porfavor ingresa el tipo de animal." });
  }
  if (!breed_pet) {
    errors.push({ text: "Porfavor ingresa la raza de la mascota." });
  }
  if (!mark) {
    errors.push({ text: "Porfavor ingresa la marca característica." });
  }
  if (!color) {
    errors.push({ text: "Porfavor ingresa color del animal." });
  }
  if (!date_born) {
    errors.push({ text: "Porfavor ingresa la fecha de nacimiento" });
  }
  if (errors.length > 0) {
    res.render("notes/new-note", {
      errors,
      rut_usr, 
      name_pet, 
      type_pet, 
      breed_pet, 
      mark, 
      color, 
      date_born,
    });
  } else {
    const newNote = new Note({ rut_usr, name_pet, type_pet, breed_pet, mark, color, date_born, obs_med});
    const rutUser = await User.findOne({ rut: rut_usr });
    newNote.user = rutUser._id;
    await newNote.save();
    req.flash("success_msg", "Registro creado correctamente");
    res.redirect("/");
  }
};

notesCtrl.renderNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user.id })
    .sort({ date: "desc" })
    .lean();
  res.render("notes/all-notes", { notes });
};

notesCtrl.renderEditForm = async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  res.render("notes/edit-note", { note });
};


notesCtrl.renderEditForm2 = async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  res.render("vaccines/new-vaccines", { note });
};

notesCtrl.renderEditForm3 = async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  res.render("operations/new-operations", { note });
};


notesCtrl.renderSeeForm = async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  const vaccines = await Vaccines.find({ user: note._id }).lean();
  const operations = await Operations.find({ user: note._id }).lean();
  res.render("notes/see-notes", { note,vaccines, operations });
};

notesCtrl.renderSeeInfoForm = async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  const user2 = await User.findById({ _id: note.user }).lean();
  res.render("notes/see-info", { note, user2 });
};


notesCtrl.updateNote = async (req, res) => {
  const { name_pet, type_pet, breed_pet, mark, color, date_born ,obs_med} = req.body;
  await Note.findByIdAndUpdate(req.params.id, { name_pet, type_pet, breed_pet, mark, color, date_born, obs_med });
  req.flash("success_msg", "Datos actualizados correctamente");

  res.redirect("/notes/edit/"+req.params.id);
};


notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Registro eliminado correctamente");
  res.redirect("/");
};

module.exports = notesCtrl;
