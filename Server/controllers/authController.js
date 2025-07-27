// controllers/authController.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import User from "../models/User.js";
import sendEmail from "../Utils/sendEmail.js";
import dotenv from "dotenv"
dotenv.config();

const FRONTEND_URL = process.env.FRONTEND_URL;

// Signup
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "No user found with that email." });

    const token = crypto.randomBytes(20).toString("hex");
    user.resetToken = token;
    user.tokenExpiry = Date.now() + 3600000;
    await user.save();

    const resetURL = `${process.env.FRONTEND_URL}/reset-password/${token}`;
    const message = `
      <p>You requested a password reset.</p>
      <p>Click the link below to reset your password:</p>
      <a href="${resetURL}">${resetURL}</a>
    `;

    console.log("Sending email to:", user.email);
    await sendEmail(user.email, "Password Reset", message);

    res.status(200).json({ message: "Reset email sent." });
  } catch (error) {
    console.error("Forgot Password Error ➤", error.message, error.stack);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


// Reset Password
export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const user = await User.findOne({
      resetToken: token,
      tokenExpiry: { $gt: Date.now() },
    });

    if (!user)
      return res.status(400).json({ message: "Invalid or expired reset token." });

    const hashedPassword = await bcrypt.hash(password, 12);
    user.password = hashedPassword;
    user.resetToken = undefined;
    user.tokenExpiry = undefined;

    await user.save();
    res.json({ message: "Password reset successful. You can now log in." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Could not reset password." });
  }
};
