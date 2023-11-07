const { Paystub } = require("../../db");

const postPaystubController = async (
  userID,
  eventID,
  issueDate,
  tickets,
  paymentNum,
  isDonation
) => {
  const newPaystub = await Paystub.create({
    userID,
    eventID,
    issueDate,
    tickets,
    paymentNum,
    isDonation,
  });

  return newPaystub;
};

module.exports = { postPaystubController };
