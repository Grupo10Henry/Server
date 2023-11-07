// controller.js
const { P_CUST_ID_CLIENTE, P_KEY } = process.env;
const crypto = require("crypto");

const postEpaycoController = (req, res) => {
  const p_cust_id_cliente = process.env.P_CUST_ID_CLIENTE;
  const p_key = process.env.P_KEY;

  const {
    x_ref_payco,
    x_transaction_id,
    x_amount,
    x_currency_code,
    x_signature,
  } = req.query;

  const signature = crypto
    .createHash("sha256")
    .update(
      `${p_cust_id_cliente}^${p_key}^${x_ref_payco}^${x_transaction_id}^${x_amount}^${x_currency_code}`
    )
    .digest("hex");

  if (x_signature === signature) {
    const x_cod_response = parseInt(req.query.x_cod_response, 10);
    switch (x_cod_response) {
      case 1:
        // Transacción aceptada
        // console.log('Transacción aceptada');
        break;
      case 2:
        // Transacción rechazada
        // console.log('Transacción rechazada');
        break;
      case 3:
        // Transacción pendiente
        // console.log('Transacción pendiente');
        break;
      case 4:
        // Transacción fallida
        // console.log('Transacción fallida');
        break;
      default:
        // Otro código de respuesta
        break;
    }
  } else {
    console.log("Firma no válida");
  }
};

module.exports = { postEpaycoController };
