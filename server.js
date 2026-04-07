import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";
import nodemailer from "nodemailer";
import axios from "axios";
import dotenv from "dotenv";
import { saveManifestacao } from "./db.js";
import fs from "fs";

dotenv.config({ path: ".env.backend" });

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

app.get("/", (req, res) => {
  res.send("API do Hospital rodando 🚀");
});

app.post("/api/ouvidoria", async (req, res) => {

  const data = req.body;

  await saveManifestacao(data);

  res.status(201).json({
    message: "Manifestação recebida com sucesso!"
  });

});

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }

});


const fileFilter = (req, file, cb) => {

  const allowedTypes = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Formato inválido. Apenas PDF ou DOCX."));
  }

};


const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter
});

const transporter = nodemailer.createTransport({

  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }

});

app.post("/api/trabalhe-conosco", upload.single("curriculo"), async (req, res) => {

  try {

    const { nome, email, telefone, area, captchaToken } = req.body;

    if (!captchaToken) {
      return res.status(400).json({ message: "Captcha não enviado" });
    }

    const captchaVerify = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: RECAPTCHA_SECRET_KEY,
          response: captchaToken
        }
      }
    );

    if (!captchaVerify.data.success) {
      return res.status(400).json({ message: "Captcha inválido" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Currículo não enviado" });
    }

    console.log("Currículo recebido:", req.file.originalname);

    await transporter.sendMail({

      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,

      subject: "Novo currículo recebido - Trabalhe Conosco",

      html: `
        <h3>Novo currículo enviado</h3>
        <p><b>Nome:</b> ${nome}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Telefone:</b> ${telefone}</p>
        <p><b>Área de interesse:</b> ${area}</p>
      `,

      attachments: [
        {
          filename: req.file.originalname,
          path: req.file.path
        }
      ]

    });

    console.log("Email enviado com sucesso");

    fs.unlink(req.file.path, (err) => {

      if (err) {
        console.log("Erro ao apagar arquivo:", err);
      } else {
        console.log("Arquivo removido do servidor");
      }

    });

    res.json({
      message: "Currículo enviado com sucesso ✔"
    });

  } catch (error) {

    console.error("Erro ao enviar currículo:", error);

    res.status(500).json({
      message: "Erro ao enviar currículo"
    });

  }

});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});