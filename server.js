// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(cors());
app.use(bodyParser.json());

// Define Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
