const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", schema);
