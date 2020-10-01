const User = require("../models/User");

exports.register = async (req, res, next) => {
  try {
    //1. we take the data from client
    const { name, email, password, bio } = req.body;

    //2. validating if the user already exists.
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, msg: "User already exists" });
    }

    //creating the user object and save to our mongo db
    const user = await User.create({ name, email, password, bio });

    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Internal error!" });
    next(error);
  }
};

exports.login = async (req, res, next) => {
  console.log("login controller");
};
