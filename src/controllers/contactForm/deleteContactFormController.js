const { ContactForm } = require("../../db");

const deleteContactFormController = async (id) => {
  const contactForm = await ContactForm.findByPk(id);
  if (!contactForm) {
    throw new Error("ContactForm no encontrado");
  }
  await contactForm.destroy();
  return { message: "ContactForm borrado exitosamente" };
};

module.exports = { deleteContactFormController };