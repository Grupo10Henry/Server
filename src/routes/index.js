const { Router } = require("express");

const userRouter = require("./userRouter");
const loginRouter = require("./loginRouter");
const eventRouter = require("./eventRouter");
const seatRouter = require("./seatRouter");
const faqRouter = require("./faqRouter");
const reviewRouter = require("./reviewRouter");
const contactFormRouter = require("./contactFormRouter");
const companyInfoRouter = require("./companyInfoRouter");
const paystubRouter = require("./paystubRouter");
const mercadoPagoRouter = require("./mercadoPagoRouter");
const userBlockedRouter = require("./userBlockedRouter");

const router = Router();

router.use("/user", userRouter);
router.use("/login", loginRouter);
router.use("/event", eventRouter);
router.use("/seat", seatRouter);
router.use("/faq", faqRouter);
router.use("/review", reviewRouter);
router.use("/paystub", paystubRouter);
router.use("/contactForm", contactFormRouter);
router.use("/companyInfo", companyInfoRouter);
router.use("/mercadoPago", mercadoPagoRouter);
router.use("/userBlocked", userBlockedRouter);

module.exports = router;
