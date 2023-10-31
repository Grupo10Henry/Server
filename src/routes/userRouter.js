//Eve
const { Router } = require("express");
const { getUserHandler } = require("../handlers/user/getUserHandler");
const { postUserHandler } = require("../handlers/user/postUserHandler");
const { putUserHandler } = require("../handlers/user/putUserHandler");
const {
  putIsAdminUserHandler,
} = require("../handlers/user/putIsAdminUserHandler");
const { deleteUserHandler } = require("../handlers/user/deleteUserHandler");
const { restoreUserHandler } = require("../handlers/user/restoreUserHandler");

const userRouter = Router();

userRouter.get("/", getUserHandler);
userRouter.delete("/:id", deleteUserHandler);
userRouter.delete("/restore/:id", restoreUserHandler);
userRouter.put("/:id", putUserHandler);
userRouter.put("/isAdmin/:id", putIsAdminUserHandler);
userRouter.post("/", postUserHandler);
module.exports = userRouter;
