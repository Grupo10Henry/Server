const {ContactForm} = require ("../../db")

const getContactFormController = async () => {
    return await ContactForm.findAll();
  };

module.exports = {
  getContactFormController
}