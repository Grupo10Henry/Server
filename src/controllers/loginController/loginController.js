const {User} = require ("../../db")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const loginController = async (email, password) => {
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
        throw new Error("Usuario no encontrado");
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        throw new Error("Contraseña incorrecta");
    }

    const token = jwt.sign(
        { id: user.id, email: user.email }, 
        process.env.JWT_SECRET, 
        { expiresIn: "1h" }
    );

    return token;
}

module.exports = { loginController};