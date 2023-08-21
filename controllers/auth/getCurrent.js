const { User } = require("../../models/user");

const getCurrent = async (req, res) => {
  const { email, subscription } = req.user;
  const user = await User.findOne({ email });
  res.json({ name: user.name, email, subscription });
};

module.exports = getCurrent;
