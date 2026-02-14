import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { saveManifestacao } from "./db.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("API de Ouvidoria rodando 🚀");
});

app.post("/api/ouvidoria", async (req, res) => {
  const data = req.body;
  await saveManifestacao(data);
  res.status(201).json({ message: "Manifestação recebida com sucesso!" });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
