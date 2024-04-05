const express = require("express");
const app = express();

app.get("/", async (req, res) => {});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
