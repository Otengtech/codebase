// routes/contactRoute.js (or inside server.js/app.js if small project)
import express from "express";
import sendEmail from "../Utils/sendEmail.js";

const router = express.Router();

router.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const html = `
    <h2>New Contact Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  try {
    await sendEmail(process.env.CONTACT_RECEIVER_EMAIL, "New Contact Message", html);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("Send Email Error:", err);
    res.status(500).json({ error: "Failed to send email." });
  }
});

export default router;
