const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.disable("x-powered-by");
app.use(express.json());
app.use(express.static(__dirname));

const radios = [
  {
    id: "vem",
    name: "Vem Comigo Deus",
    streamUrl: process.env.VEM_STREAM_URL || "",
    siteUrl: process.env.VEM_SITE_URL || ""
  },
  {
    id: "pop",
    name: "Radio Pop Gospel",
    streamUrl: process.env.POP_STREAM_URL || "",
    siteUrl: process.env.POP_SITE_URL || ""
  },
  {
    id: "esme",
    name: "Rádio És-me Aqui",
    streamUrl: process.env.ESME_STREAM_URL || "https://servidor-es-me-aqui.onrender.com/stream",
    siteUrl: process.env.ESME_SITE_URL || ""
  }
];

app.get("/api/health", (req, res) => {
  res.json({
    status: "online",
    servidor: "Painel Central Conecta Gospel",
    radios: radios.length
  });
});

app.get("/api/radios", (req, res) => {
  res.json(radios);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Painel Conecta Gospel ativo na porta ${PORT}`);
});
