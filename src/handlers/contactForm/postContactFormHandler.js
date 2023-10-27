const {
    postContactFormController,
  } = require("../../controllers/contactForm/postContactFormController");

const postContactFormHandler = async (req, res) => {
    const { userID, name, lastName, email, phone, consultation } = req.body;
    
    try {
      const newContactForm = await postContactFormController(
        userID,
        name,
        lastName,
        email,
        phone,
        consultation
      );
      res.status(201).json(newContactForm);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    postContactFormHandler,
  };