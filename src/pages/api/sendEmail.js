import nodemailer from "nodemailer";

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
      subject: `New message from ${name}`, // assunto
      text: `You have received a new message from your website contact form.

        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <p>You have received a new message from your website contact form.</p>
        <h3>Contact Details</h3>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
        </ul>
        <h3>Message</h3>
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
