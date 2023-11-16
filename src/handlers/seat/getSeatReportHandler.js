const { getSeatReportController } = require('../../controllers/seat/getSeatReportController');

const getSeatReportHandler = async (req, res) => {
    const result = await getSeatReportController();
    if (result.error) {
        res.status(500).json({ message: result.error });
    } else {
        res.json(result);
    }
};

module.exports = { getSeatReportHandler };

