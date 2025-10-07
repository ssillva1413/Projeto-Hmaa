import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { saveManifestacao } from "./db.js";

const app = express();
const PORT = 5000;

// middlewares
app.use(cors());
app.use(bodyParser.json());

// rota de teste
app.get("/", (req, res) => {
  res.send("API de Ouvidoria rodando 🚀");
});

// rota para salvar manifestação
app.post("/api/ouvidoria", async (req, res) => {
  const data = req.body;
  await saveManifestacao(data);
  res.status(201).json({ message: "Manifestação recebida com sucesso!" });
});

// inicia servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
