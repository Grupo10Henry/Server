const { ContactForm } = require("../../db");
const { sendEmailContactForm } = require("../../Helpers/sendEmailContactForm");
const { getEmailContactForm } = require("../../Helpers/getEmailContactForm");
const postContactFormController = async (
  userID,
  name,
  lastName,
  email,
  phone,
  consultation
) => {
  const newContactForm = await ContactForm.create({
    userID,
    name,
    lastName,
    email,
    phone,
    consultation,
  });
  sendEmailContactForm(email);
  getEmailContactForm(name, lastName, email, phone, consultation);
  return newContactForm;
};

module.exports = { postContactFormController };
