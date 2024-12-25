const bcrypt = require("bcrypt");
const UserModel = require("../models/User");
const salt = bcrypt.genSaltSync(10);

exports.register = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).send({
      message: "Please provide all requires fields!",
    });
    return;
  }

  try {
    const hashesPassword = bcrypt.hashSync(password, salt);
    const user = await UserModel.create({
      username,
      password: hashesPassword,
    });
    res.send({
      message: "User Register successfuly",
      user,
    });
  } catch (error) {
    res.status(500).send({
      message:
        error.message ||
        "Something error occurred while registering a new user",
    });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).send({
      message: "Please provide both username and password!",
    });
    return;
  }

  try {
    const user = await UserModel.findOne({ username });
    if (!user) {
      res.status(404).send({
        message: "User not found!!",
      });
      return;
    }

    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (!isValidPassword) {
      res.status(404).send({
        message: "Invalid Password",
      });
      return;
    }

    res.send({
      message: "Login Successful!",
      user: {
        id: user._id,
        username: user.username,
      },
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Something went wrong during login",
    });
  }
};
