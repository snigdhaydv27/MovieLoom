const express = require("express");
const dotenv = require("dotenv");

const authRoutes = require("./routes/auth.routes");
const movieRoutes = require("./routes/movie.routes");
const tvRoutes = require("./routes/tv.routes");

const ENV_VAR = require("./config/envVar");
const { connectDB } = require("./config/db");
const cookieParser = require("cookie-parser");

const middleRoute = require("./middleware/middleRoute");

dotenv.config();
const app = express();
const PORT = ENV_VAR.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie",middleRoute, movieRoutes);
app.use("/api/v1/movie",middleRoute,tvRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});


