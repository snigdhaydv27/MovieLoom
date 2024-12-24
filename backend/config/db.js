const mongoose= require("mongoose");
const ENV_VAR = require("./envVar");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV_VAR.MONGO_URI);
    console.log("MongoDB connected: " + conn.connection.host);
  } catch (error) {
    process.exit(1);// 1 means error , 0 means success
    console.log("Error connecting to MongoDb: "+ error.message);
  }
}