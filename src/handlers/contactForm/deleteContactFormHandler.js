const { deleteContactFormController } = require("../../controllers/contactForm/deleteContactFormController");

const deleteContactFormHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteContactFormController(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { deleteContactFormHandler };