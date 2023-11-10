require("dotenv").config();
const { MercadoPagoConfig, Preference } = require("mercadopago");
const { ACCES_TOKEN_MP } = process.env;

const client = new MercadoPagoConfig({
  accessToken: ACCES_TOKEN_MP,
});
const payment = new Preference(client);
const placeOrder = async (req, res) => {
  try {
    //generar orden de compra a mercado pago con la info que llega por body
    // const {id, title, description, image, stock, condition, price} = req.body;
    const { name, price, description } = req.body;
    let preference = {
      body: {
        items: [
          {
            title: name,
            quantity: 1,
            unit_price: price,
            currency_id: "COL",
            // picture_url: data.image,
            description: description,
          },
        ],

        back_urls: {
          failure: "www.google.com",
          pending: "http://localhost:3001/purchase/pending",
          success: "http://localhost:3001/purchase/success",
        },
      },
    };

    const response = await payment.create(preference);

    res.status(200).send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const succesfulPurchase = (req, res) => {
  try {
    //revisar que hace cuando tenga credenciales
    const { payment_id } = req.query;

    res.status(200).send("Compra realizada con exito");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { placeOrder, succesfulPurchase };
