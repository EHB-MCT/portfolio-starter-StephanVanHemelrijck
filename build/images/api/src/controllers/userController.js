const userService = require("../services/userService");

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    return res.json({ users });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

// exports
module.exports = {
  getUsers,
};
