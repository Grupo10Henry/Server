const { getSeatDetailsController } = require('../../controllers/seat/getSeatDetailsController');

const getSeatDetailsHandler = async (req, res) => {
    const { id } = req.params;
    const result = await getSeatDetailsController(id);
    if (result.error) {
        res.status(result.error === 'Asiento no encontrado' ? 404 : 500).json({ message: result.error });
    } else {
        res.json(result);
    }
};

module.exports = { getSeatDetailsHandler };