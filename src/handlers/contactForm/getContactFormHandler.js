const {
    getContactFormController,
  } = require("../../controllers/contactForm/getContactFormController");

  const getContactFormHandler = async (req, res) => {
    try {
      const contactForm = await getContactFormController();
      if (contactForm.length > 0) {
        res.status(200).json(contactForm);
      } else {
        res.status(404).json({ message: "No contact forms found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  module.exports = {
   getContactFormHandler,
  };
  