const { getFAQById } = require("../../controllers/FAQ/getFAQidController");

const getFAQByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const faq = await getFAQById(id);
    res.status(200).json(faq);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getFAQByIdHandler };
