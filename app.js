const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.use("/video", require("./routes/routes"));

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});