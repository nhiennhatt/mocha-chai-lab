const mongo = require("mongoose");

const UserSchema = new mongo.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firsName: { type: String },
  lastName: { type: String },
  birthday: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports.userModel = mongo.model("users", UserSchema);
module.exports.UserSchema = UserSchema;
