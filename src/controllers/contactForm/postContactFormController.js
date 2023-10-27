const { ContactForm } = require("../../db");

const postContactFormController = async (
    userID,
     name, 
     lastName,
      email, 
      phone, 
      consultation) => {

  const newContactForm = await ContactForm.create({
    userID,
    name,
    lastName,
    email,
    phone,
    consultation
  });
  
  return newContactForm;
};

module.exports = { postContactFormController };