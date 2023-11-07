const {
  postEpaycoController,
} = require("../../controllers/epayco/postEpaycoController");

const postEpaycoHandler = (req, res) => {
  postEpaycoController(req, res);
};

module.exports = { postEpaycoHandler };
