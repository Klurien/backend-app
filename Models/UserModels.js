const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  Username: {
    type: String,
  },
  Email: {
    type: string,
  },
  Password: {
    type: string,
  },
 Profile: {
  type: String,
  },
  // created_at: {
  //   type: Date,
  //   default: Date.now,
 // },
});

const Product = mongoose.model("User", UserSchemaSchema);
module.exports = User;
