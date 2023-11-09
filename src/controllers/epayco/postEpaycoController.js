// controller.js

const { P_CUST_ID_CLIENTE, P_KEY, EPAYCOSECRET } = process.env;
const crypto = require("crypto");

const postEpaycoController = (req, res) => {
  const {
    x_signature,
    x_cust_id_cliente = P_CUST_ID_CLIENTE,
    x_ref_payco,
    x_transaction_id,
    x_amount,
    x_currency_code,
  } = req.body;

  const str = `${x_cust_id_cliente}^${P_KEY}^${x_ref_payco}^${x_transaction_id}^${x_amount}^${x_currency_code}`;
  const hash = crypto.createHash(EPAYCOSECRET).update(str).digest("hex");

  if (hash !== x_signature) {
    return res.status(422).send("Invalid Signature");
  }

  // Aquí puedes realizar acciones adicionales, como actualizar la base de datos si es necesario

  return res.status(200).send("OK"); // Responde a ePayco con un 200 OK
};

module.exports = { postEpaycoController };
