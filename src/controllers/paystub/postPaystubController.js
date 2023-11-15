const { Paystub, userEvent } = require("../../db");

const postPaystubController = async (
  userID,
  eventID,
  tickets,
  paymentNum,
  isDonation
) => {
  const newPaystub = await Paystub.create({
    userID,
    eventID,
    tickets,
    paymentNum,
    isDonation,
  });
  userEvent.create({ userID, eventID });
  return newPaystub;
};

module.exports = { postPaystubController };
// {   "userID": 1,
//   "eventID": "c1f7167f-dc48-4cf2-8fec-82c2c33df415",
//   "issueDate": "2023-11-14",
//   "tickets": 240000,
//   "paymentNum":142536,
//   "isDonation": false}
