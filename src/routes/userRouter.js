const { Router } = require("express");
const { getUserHandler } = require("../handlers/user/getUserHandler");

const userRouter = Router();

userRouter.get("/", getUserHandler);
userRouter.delete("/:id");
userRouter.put("/:id");
userRouter.post("/");
module.exports = userRouter;
