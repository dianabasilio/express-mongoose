// config/db.js
//npm install express
//npm install mongoose
//npm install body-parser cors

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/api-restful", {});
    console.log("MongoDB connected...");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
