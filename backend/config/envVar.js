const dotenv = require("dotenv");

dotenv.config();

const ENV_VAR = {
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT || 5001,
}

module.exports = ENV_VAR;