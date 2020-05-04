const express = require("express");

const app = express();

const itemRoutes = require("./routes/index");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(itemRoutes);
app.get("/", (req, res) => {
  return res.json("Start with /items");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
