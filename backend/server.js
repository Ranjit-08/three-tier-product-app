require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const songRoutes = require("./routes/songRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/songs", songRoutes);

app.listen(5000, () => console.log("Backend running on port 5000"));
