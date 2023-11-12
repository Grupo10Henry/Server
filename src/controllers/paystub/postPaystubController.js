const { Paystub, userEvent } = require("../../db");

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
  userEvent.create({ userID, eventID });
  return newPaystub;
};

module.exports = { postPaystubController };
