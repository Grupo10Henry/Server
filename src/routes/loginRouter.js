const { Router } = require("express");
const { loginHandler } = require("../handlers/loginHandler/loginHandler");
const {
  googleLoginHandler,
} = require("../handlers/loginHandler/googleLoginHandler");

const loginRouter = Router();

loginRouter.post("/", loginHandler);
loginRouter.post("/google", googleLoginHandler);

module.exports = loginRouter;
