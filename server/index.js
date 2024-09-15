const express = require("express");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to my server!!");
});

app.use("/", router);

app.listen(3000, () => console.log("Server running on port 3000"));
