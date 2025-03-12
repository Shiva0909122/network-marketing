const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// ✅ Enable CORS for All Requests
app.use(cors({ origin: "*" })); // Allow all domains (for testing)

app.use(express.json());

// Connect to MongoDB done
connectDB();

// Routes
app.use("/api/members", require("./routes/memberRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`)); 
