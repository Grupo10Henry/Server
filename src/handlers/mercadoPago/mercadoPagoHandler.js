require("dotenv").config();
const { Test } = process.env;
const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token: Test,
});

//const payment = new Preference(client);
const placeOrder = async (req, res) => {
  try {
    //generar orden de compra a mercado pago con la info que llega por body
    // const {id, title, description, image, stock, condition, price} = req.body;
    const { name, price, description } = req.body;
    let preference = {
      items: [
        {
          userId: 41,
          title: name,
          quantity: 1,
          unit_price: 1,
          currency_id: "ARS",
          // picture_url: data.image,
          description: description,
        },
      ],

      back_urls: {
        failure: "http://localhost:5173/#/mercadopagoerror",
        pending: "http://localhost:5173/#/mercadopagopendiente",
        success: "http://localhost:5173/#/mercadopagoexitoso",
      },
      notification_url:
        "https://18c2-190-172-72-88.ngrok.io/mercadoPago/webhook",
    };

    const response = await mercadopago.preferences.create(preference);
    res.status(200).json({
      init_point: response.body.init_point,
      payment_id: response.body.id,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const succesfulPurchase = (req, res) => {
  try {
    const { payment_id } = req.query;
    res
      .status(200)
      .json({ message: "Compra realizada con éxito", paymentId: payment_id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const webhook = async (req, res) => {
  try {
    const data = req.query;
    console.log(" data ", data);

    if (data.type === "payment") {
      const paymentId = data["data.id"];

      const payment = await mercadopago.payment.findById(paymentId);
      console.log("Hola Juli = ", payment);
      res.status(204).json(payment);
    } else {
      console.log("type ", data.type);
      res.status(204).json("Aca estoy");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = { placeOrder, webhook, succesfulPurchase };
