const { Router } = require("express");

const jwt = require('jsonwebtoken');
const userRouter = require("./userRouter");
const loginRouter = require("./loginRouter");
const eventRouter = require("./eventRouter");
const seatRouter = require("./seatRouter");
//const faqRouter = require("./faqRouter");
//const paystubRouter = require("./paystubRouter");
const reviewRouter = require("./reviewRouter");
const contactFormRouter = require("./contactFormRouter");
const passport = require('passport');
const companyInfoRouter = require("./companyInfoRouter");

const router = Router();

router.use("/user", userRouter);
router.use("/login", loginRouter);
router.use("/event", eventRouter);
router.use("/seat", seatRouter);
router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        const token = jwt.sign(
            { id: req.user.id, email: req.user.email }, 
            process.env.JWT_SECRET, 
            { expiresIn: "1h" }
        );
        // Puedes redirigir al frontend con el token como parámetro, o encontrar otra manera de enviarlo.
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: true, // Solo usar en HTTPS
            sameSite: 'strict' // Evita el envío de la cookie en solicitudes cross-site
          });
          res.redirect('http://localhost:5173/');
    }
);
//router.use("/faq", faqRouter);
//router.use("/paystub", paystubRouter);
router.use("/review", reviewRouter);
router.use("/contactForm", contactFormRouter);
router.use("/companyInfo", companyInfoRouter);

module.exports = router;
