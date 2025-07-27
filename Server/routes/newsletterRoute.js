import express from "express";
import sendEmail from "../utils/sendEmail.js";

const router = express.Router();

router.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  const html = `
    <h2>Welcome to LearnBase Newsletter!</h2>
    <p>Thanks for subscribing. You'll now receive updates, tips, and resources directly in your inbox.</p>
    <p>If you didn’t subscribe, you can ignore this message.</p>
  `;

  try {
    await sendEmail(email, "Welcome to LearnBase Newsletter!", html);
    res.status(200).json({ success: true, message: "Subscription successful." });
  } catch (err) {
    console.error("Newsletter error:", err);
    res.status(500).json({ error: "Failed to send welcome email." });
  }
});

export default router;
