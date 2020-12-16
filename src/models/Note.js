const { Schema, model } = require("mongoose");

const NoteSchema = new Schema(
  {
    rut_usr: {
      type: String,
      required: true
    },
    name_pet: {
      type: String,
      required: true
    },
    type_pet: {
      type: String,
      required: true
    },
    breed_pet: {
      type: String,
      required: true
    },
    mark: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    date_born: {
      type: String,
      required: true
    },

    obs_med: {
      type: String,
      required: true
    },

    user: {
      type: String,
      required: true
    },

  },
  {
    timestamps: true
  }
);

module.exports = model("Note", NoteSchema);
