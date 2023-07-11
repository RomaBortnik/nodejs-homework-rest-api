const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const user = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
  });
  res.json({ user: { email: user.email, subscription: user.subscription } });
};

module.exports = updateSubscription;
