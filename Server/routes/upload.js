// server/routes/upload.js or inside your reviews route
import express from "express";
import axios from "axios";
import multer from "multer";
import FormData from "form-data";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();
const upload = multer(); // memory storage

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const imageBuffer = req.file.buffer.toString("base64");

    const form = new FormData();
    form.append("image", imageBuffer);

    const imgbbRes = await axios.post(
      `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
      form,
      {
        headers: form.getHeaders(),
      }
    );

    const imageUrl = imgbbRes.data.data.url;
    res.status(200).json({ url: imageUrl });
  } catch (error) {
    console.error("Image upload failed:", error);
    res.status(500).json({ message: "Image upload failed" });
  }
});

export default router;
