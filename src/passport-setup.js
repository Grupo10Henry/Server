const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('./db');
const bcrypt = require('bcryptjs');

passport.serializeUser((user, done) => {
    done(null, user.userID);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findByPk(id);
    done(null, user);
});

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    }, async (token, tokenSecret, profile, done) => {
        let user = await User.findOne({ where: { googleID: profile.id } });
        if (!user) {
            user = await User.create({
                googleID: profile.id,
                name: profile.name.givenName,
                lastName: profile.name.familyName,
                email: profile.emails[0].value,
                password: await bcrypt.hash(profile.id, 10), // Usar ID de Google como contraseña por defecto.
                dob: new Date(), // Poner fecha por defecto o modificar para permitir null.
                image: profile.photos[0].value
            });
        }
        done(null, user);
    })
);