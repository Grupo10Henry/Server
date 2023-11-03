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
        callbackURL: 'http://localhost:3001/auth/google/callback',
        scope: ['profile', 'email'] // <-- Aquí he agregado el parámetro scope
    }, async (token, tokenSecret, profile, done) => {
        let user = await User.findOne({ where: { googleID: profile.id } });
        
        if (!user) {
            const { id: googleID, name: { givenName: name, familyName: lastName }, emails, photos } = profile;
            user = await User.create({
                googleID,
                name,
                lastName,
                email: emails[0].value,
                password: await bcrypt.hash(googleID, 10), // Usar ID de Google como contraseña por defecto.
                dob: new Date(), // Poner fecha por defecto o modificar para permitir null.
                image: photos[0].value
            });
        }
        
        done(null, user);
    })
);