const { Contact } = require("../../models/contact");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 5, favorite } = req.query;
  const skip = (page - 1) * limit;

  const result = favorite
    ? await Contact.find({ owner, favorite }, "", {
        skip,
        limit,
      })
    : await Contact.find({ owner }, "", { skip, limit });
  res.json(result);
};

module.exports = getAll;
