require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/music", require("./routes/music.routes"));

app.listen(5000, () => console.log("Backend running on 5000"));
