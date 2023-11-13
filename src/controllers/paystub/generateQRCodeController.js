const qrcode = require("qrcode");
const { getPaystubsController } = require("../paystub/getPaystubsController");

const generateQRCodeController = async (paystubID) => {
  try {
    // Obtén la información del paystub
    const paystub = await getPaystubsController(paystubID);

    // Genera el código QR y devuelve la URL
    const qrCode = await qrcode.toDataURL(JSON.stringify(paystub));
    return qrCode;
  } catch (error) {
    throw error;
  }
};

module.exports = { generateQRCodeController };
