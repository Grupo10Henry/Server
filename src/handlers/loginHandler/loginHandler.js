const { loginController} = require ("../../controllers/loginController/loginController")

const loginHandler = async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await loginController(email, password);
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { loginHandler };