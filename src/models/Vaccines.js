const { Schema, model } = require("mongoose");

const VaccinesSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },

    user: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Vaccines", VaccinesSchema);