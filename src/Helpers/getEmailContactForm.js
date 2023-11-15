const { transporter } = require("./mailer");

const getEmailContactForm = async (
  name,
  lastName,
  email,
  phone,
  consultation
) => {
  const info = await transporter.sendMail({
    from: email, // dirección del remitente
    to: '"Mi butaca" <henrypfgrupo10@gmail.com>', // lista de destinatarios
    subject: `${name} ${lastName}`, // línea de asunto
    html: `El usuario ${name} ${lastName} ha enviado el siguiente mensaje: <br> ${consultation}. <br> Número de teléfono: ${phone}. \n `,
  });
};

module.exports = { getEmailContactForm };
