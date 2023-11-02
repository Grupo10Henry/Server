const { createFAQ } = require("../../controllers/FAQ/postFAQcontroller");

const postFAQHandler = async (req, res) => {
  const { question, answer } = req.body;

  try {
    const newFAQ = await createFAQ(question, answer);
    res.status(201).json(newFAQ);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al crear una nueva pregunta frecuente" });
  }
};

module.exports = { postFAQHandler };
