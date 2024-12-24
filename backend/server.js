const express = require("express");
const authRoutes = require("./routes/auth.routes");
const dotenv = require("dotenv");
const ENV_VAR = require("./config/envVar");
const { connectDB } = require("./config/db");

dotenv.config();
const app = express();
const PORT = ENV_VAR.PORT;

app.use(express.json());

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
