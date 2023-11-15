
const { Review2, User, Event } = require("../../db");

const getReviewController = async () => {
  const reviews = await Review2.findAll();
  const data = await Promise.all(
    reviews.map(async (review) => {
      const findUser = await User.findOne({ where: { userID: review.userID } });
      const findEvent = await Event.findOne({
        where: { eventID: review.eventID },
      });
      if (findUser && findEvent) {
        const info = {
          ...review.dataValues,
          userName: findUser.name,
          userLastName: findUser.lastName,
          eventName: findEvent.name,
        };
        return info;
      }
    })
  );
  return data;

};

module.exports = {
  getReviewController,
};
