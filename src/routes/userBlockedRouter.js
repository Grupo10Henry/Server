const { Router } = require("express");
const {
  getUserBlockedHandler,
} = require("../handlers/userBlocked/getUserBlockedHandler");
const {
  postUserBlockedHandler,
} = require("../handlers/userBlocked/postUserBlockedHandler");
const {
  deleteUserBlockedHandler,
} = require("../handlers/userBlocked/deleteUserBlockedHandler");

const userBlockedRouter = Router();

userBlockedRouter.get("/", getUserBlockedHandler);
userBlockedRouter.delete("/:id", deleteUserBlockedHandler);
userBlockedRouter.post("/", postUserBlockedHandler);

module.exports = userBlockedRouter;
