const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  res.sendFile("../frontend/dist/index.html", { root: __dirname });
});

app.post("/user", async (req, res) => {
  res.json(req.body);
});

module.exports = app;
