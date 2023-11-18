const {
  getSeat2ReportController,
} = require("../../controllers/seat/getSeat2ReportController");

const getSeat2ReportHandler = async (req, res) => {
  const result = await getSeat2ReportController();
  if (result.error) {
    res.status(500).json({ message: result.error });
  } else {
    res.json(result);
  }
};

module.exports = { getSeat2ReportHandler };
