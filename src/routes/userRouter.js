const { Router } = require("express");

const userRouter = Router();

userRouter.get("/");
userRouter.get("/:id"); //Por las dudas
userRouter.delete("/:id");
userRouter.put("/:id");
userRouter.post("/");
module.exports = userRouter;
