const { Router } = require("express");
const { getUserHandler } = require("../handlers/user/getUserHandler");
const { postUserHandler } = require("../handlers/user/postUserHandler");

const userRouter = Router();

userRouter.get("/", getUserHandler);
userRouter.delete("/:id");
userRouter.put("/:id");
userRouter.post("/", postUserHandler);
module.exports = userRouter;
