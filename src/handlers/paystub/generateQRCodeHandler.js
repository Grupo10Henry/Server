const {
  generateQRCodeController,
} = require("../../controllers/paystub/generateQRCodeController");

const generateQRCodeHandler = async (req, res) => {
  const { paystubID } = req.params;

  try {
    // Obtén el código QR de la información del paystub
    const qrCode = await generateQRCodeController(paystubID);

    // Envía el código QR como respuesta
    res.json({ qrCode });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al generar el código QR" });
  }
};

module.exports = { generateQRCodeHandler };
