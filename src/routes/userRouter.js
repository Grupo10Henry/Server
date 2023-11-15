//Eve
const { Router } = require("express");
const { getUserHandler } = require("../handlers/user/getUserHandler");
const { getIdUserHandler } = require("../handlers/user/getIdUserHandler");
const { postUserHandler } = require("../handlers/user/postUserHandler");
const { putUserHandler } = require("../handlers/user/putUserHandler");
const {
  putIsAdminUserHandler,
} = require("../handlers/user/putIsAdminUserHandler");
const { deleteUserHandler } = require("../handlers/user/deleteUserHandler");
const { restoreUserHandler } = require("../handlers/user/restoreUserHandler");
const {
  getUserByDateHandler,
} = require("../handlers/user/getUserByDateHandler");


const userRouter = Router();

userRouter.get("/", getUserHandler);
userRouter.get("/:id", getIdUserHandler);
userRouter.delete("/restore/:id", restoreUserHandler);
userRouter.delete("/:id", deleteUserHandler);
userRouter.put("/isAdmin/:id", putIsAdminUserHandler);
userRouter.put("/:id", putUserHandler);
userRouter.post("/", postUserHandler);
userRouter.put("/:id/restore", restoreUserHandler);
userRouter.get("/:year/:month", getUserByDateHandler);
module.exports = userRouter;
