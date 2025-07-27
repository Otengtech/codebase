import express from "express";
import multer from "multer";
import axios from "axios";
import FormData from "form-data";
import fs from "fs";

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // store file temporarily

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const filePath = req.file.path;

    const formData = new FormData();
    formData.append("image", fs.readFileSync(filePath).toString("base64"));

    const imgbbRes = await axios.post(
      `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
      formData
    );

    fs.unlinkSync(filePath); // clean up

    res.json({ url: imgbbRes.data.data.url });
  } catch (err) {
    console.error("Upload error:", err.message);
    res.status(500).json({ error: "Image upload failed" });
  }
});

export default router;
