const { Router } = require("express");
const userRouter = require("./userRouter");
const loginRouter = require("./loginRouter");
const eventRouter = require("./eventRouter");
const seatRouter = require("./seatRouter");
const faqRouter = require("./faqRouter");
const paystubRouter = require("./paystubRouter");
const reviewRouter = require("./reviewRouter");
const contactFormRouter = require("./contactFormRouter");
const companyInfoRouter = require("./companyInfoRouter");
const router = Router();

router.use("/user", userRouter);
router.use("/login", loginRouter);
router.use("/event", eventRouter);
router.use("/seat", seatRouter);
router.use("/faq", faqRouter);
router.use("/paystub", paystubRouter);
router.use("/review", reviewRouter);
router.use("/contactForm", contactFormRouter);
router.use("/companyInfo", companyInfoRouter);

module.exports = router;
