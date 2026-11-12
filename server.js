const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.disable("x-powered-by");
app.use(express.json());
app.use(express.static(__dirname));

const radios = {
  vem: {
    id: "vem",
    name: "Vem Comigo Deus",
    siteUrl: "",
    streamUrl: ""
  },
  pop: {
    id: "pop",
    name: "Radio Pop Gospel",
    siteUrl: "",
    streamUrl: ""
  },
  esme: {
    id: "esme",
    name: "Rádio És-me Aqui",
    siteUrl: "",
    streamUrl: "https://servidor-es-me-aqui.onrender.com/stream"
  }
};

app.get("/api/health", (req, res) => {
  res.json({
    status: "online",
    servidor: "Painel Central Conecta Gospel"
  });
});

app.get("/api/radios", (req, res) => {
  res.json(Object.values(radios));
});

app.post("/api/radios/:id", (req, res) => {
  const radio = radios[req.params.id];

  if (!radio) {
    return res.status(404).json({
      ok: false,
      error: "Rádio não encontrada"
    });
  }

  const { siteUrl, streamUrl } = req.body;

  radio.siteUrl = siteUrl || "";
  radio.streamUrl = streamUrl || "";

  res.json({
    ok: true,
    message: "Configuração recebida",
    radio
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log("Painel Conecta Gospel online na porta " + PORT);
});
