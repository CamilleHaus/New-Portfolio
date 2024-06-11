import nodemailer from "nodemailer";
require('dotenv').config();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    console.log("Request body:", req.body);

    // Configure o transporte do Nodemailer
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

   const mailOptions = {
      from: process.env.SMTP_USER, // remetente
      to: process.env.SMTP_RECEIVER, // destinatário
      subject: `Nova mensagem de ${name} - Portfolio`, // assunto
      text: `Você recebeu uma mensagem do seu formulário de contato!

        Nome: ${name}
        Email: ${email}
        Mensagem: ${message}
      `,
      html: `
        <p>Você recebeu uma mensagem do seu formulário de contato</p>
        <h3>Informações de contato</h3>
        <ul>
          <li>Nome: ${name}</li>
          <li>Email: ${email}</li>
        </ul>
        <h3>Mensagem</h3>
        <p>${message}</p>
      `,
    };

    try {
      let info = await transporter.sendMail(mailOptions);
      console.log("Email sent: ", info.messageId); // Adicione este log

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email: ", error); // Adicione este log
      res.status(500).json({ message: "Error sending email", error });
    }
  } else {
    console.log("Invalid request method:", req.method); // Adicione este log
    res.status(405).json({ message: "Method not allowed" });
  }
}
