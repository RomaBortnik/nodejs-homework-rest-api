const { User } = require("../../models/user");
const { HttpError, sendEmail } = require("../../helpers");

const { RENDER_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw HttpError(400, "Missing required field email");
  }

  const user = await User.findOne({ email });

  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target = '_blank' href='${RENDER_URL}/api/users/verify/${user.verificationToken}'>Click verify email</a>`,
  };

  await sendEmail(verifyEmail);

  res.json({
    message: "Verification email sent",
  });
};

module.exports = resendVerifyEmail;
