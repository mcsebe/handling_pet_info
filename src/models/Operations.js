const { Schema, model } = require("mongoose");

const OperationsSchema = new Schema(
    {
        name: {
          type: String,
          required: true
        },

        description: {
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

module.exports = model("Operations", OperationsSchema);
