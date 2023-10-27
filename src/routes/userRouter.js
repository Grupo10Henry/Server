const { Router } = require("express");
const { getUserHandler } = require("../handlers/user/getUserHandler");
const { postUserHandler } = require("../handlers/user/postUserHandler");
const { putUserHandler } = require("../handlers/user/putUserHandler");
const { deleteUserHandler } = require("../handlers/user/deleteUserHandler");
const userRouter = Router();

userRouter.get("/", getUserHandler);
userRouter.delete("/:id", deleteUserHandler);
userRouter.put("/:id", putUserHandler);
userRouter.post("/", postUserHandler);
module.exports = userRouter;
