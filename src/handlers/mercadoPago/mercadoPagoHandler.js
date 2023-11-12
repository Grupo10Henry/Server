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
          unit_price: price,
          currency_id: "ARG",
          // picture_url: data.image,
          description: description,
        },
      ],

      back_urls: {
        failure: "http://localhost:5173/#/mercadopagoerror",
        pending: "http://localhost:5173/#/mercadopagopendiente",
        success: "http://localhost:5173/#/mercadopagoexitoso",
      },
    };

    const response = await mercadopago.preferences.create(preference);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const succesfulPurchase = (req, res) => {
  try {
    //revisar que hace cuando tenga credenciales
    const { payment_id } = req.query;

    res.status(200).send("Compra realizada con exito", payment_id);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const webhook = async (req, res) => {
  try {
    const data = req.query;
    if (data.type === "payment") {
      const payment = await mercadopago.payment.findById(payment["data.id"]);
      console.log(payment);
      res.status(204).json(payment);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = { placeOrder, webhook, succesfulPurchase };
