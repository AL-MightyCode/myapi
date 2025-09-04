const express = require("express");
const app = express();

app.get("/message", (req, res) => {
  res.json({ text: "Hello Musheer from Render API 🚀" });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

