const express = require("express");
const { User } = require("./models");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  res.sendFile("../frontend/dist/index.html", { root: __dirname });
});

app.post("/user", async (req, res) => {
  res.redirect("/");
});

module.exports = app;
