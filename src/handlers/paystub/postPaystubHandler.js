const {
  postPaystubController,
} = require("../../controllers/paystub/postPaystubController");

const postPaystubHandler = async (req, res) => {
  const { userID, eventID, issueDate, tickets, paymentNum, isDonation } =
    req.body;

  try {
    const newPaystub = await postPaystubController(
      userID,
      eventID,
      issueDate,
      tickets,
      paymentNum,
      isDonation
    );
    res.status(201).json(newPaystub);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { postPaystubHandler };
