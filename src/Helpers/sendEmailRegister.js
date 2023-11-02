const { transporter } = require("./mailer");

const sendEmailRegister = async (email) => {
  const info = await transporter.sendMail({
    from: '"Mi butaca" <henrypfgrupo10@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Usuario creado", // Subject line
    html: "<b>Evelyn es una genia! </b>", // html body
  });
};
module.exports = { sendEmailRegister };
