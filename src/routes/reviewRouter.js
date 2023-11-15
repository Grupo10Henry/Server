const { Router } = require("express");
const { getReviewHandler } = require("../handlers/review/getReviewHandler");
const {
  getUserEventReviewHandler,
} = require("../handlers/review/getUserEventReviewHandler");
const { postReviewHandler } = require("../handlers/review/postReviewHandler");
const {
  deleteReviewHandler,
} = require("../handlers/review/deleteReviewHandler");

const reviewRouter = Router();

reviewRouter.get("/", getReviewHandler); //Obtener todos los comentarios
reviewRouter.get("/:userID/:eventID", getUserEventReviewHandler);
reviewRouter.delete("/:id", deleteReviewHandler);
reviewRouter.post("/", postReviewHandler); // crear comentario
module.exports = reviewRouter;
