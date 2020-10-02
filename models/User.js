const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please give name"],
  },
  bio: {
    type: String,
    required: [true, "Please give bio"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please give email"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please add password"],
    minlength: 5,
    select:false
  },
  createdAt:{
    type: Date,
    default: Date.now,
  }
});
UserSchema.pre('save', async function(){
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password)
})
UserSchema.methods.getSignedJwtToken = function(){
  return jwt.sign({id:this_id},process.env.JWT_SECRET)
}
module.exports = mongoose.model("User", UserSchema);
