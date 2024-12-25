const dotenv = require("dotenv");

dotenv.config();

const ENV_VAR = {
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT || 5001,
    JWT_SECRET: process.env.JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV,
    TMDB_API_KEY: process.env.TMDB_API_KEY,
}

module.exports = ENV_VAR;


// snigdhakug23cs
//1z5VgqRFuv6ppGWK