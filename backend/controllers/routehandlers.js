const User = require("../models/user");

exports.home = (req, res) => {
  res.status(201).send('<h1 style="text-align: center">CRUD App</h1>');
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).json({ users: users });
  } catch (error) {
    console.log(error.message);
  }
};

exports.createUser = async (req, res) => {
  try {
    const { username, email } = req.body;

    if (!username || !email) {
      throw new Error("Username and email are required");
    }

    if (!(email.endsWith("@gmail.com") || email.endsWith("@outlook.com"))) {
      throw new Error("Email is not in correct format");
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("User already exists");
    }

    let newUser = new User({ username, email });
    newUser = await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.status(201).json(user);
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { username, email } = req.body;

    if (!username || !email) {
      throw new Error("Username and email are required");
    }

    if (!(email.endsWith("@gmail.com") || email.endsWith("@outlook.com"))) {
      throw new Error("Email is not in correct format");
    }

    await User.findByIdAndUpdate(req.params.userId, {
      username,
      email,
    });

    const updatedUser = await User.findById(req.params.userId);
    res.status(201).json(updatedUser);
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.userId);

    res.status(201).json({
      success: true,
      message: "User has been deleted",
    });
  } catch (error) {
    console.log(error.message);
  }
};
