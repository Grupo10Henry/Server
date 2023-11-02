const {Review} = require("../../db")

const getReviewController = async () => {
    const reviews = await Review.findAll();
    return reviews
};

module.exports = {
    getReviewController
}