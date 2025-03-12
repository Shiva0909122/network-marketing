const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// ✅ Enable CORS for specific frontend
app.use(cors({
    origin: "https://network-frontend-one.vercel.app", 
    methods: "GET,POST,PUT,DELETE",
    credentials: true 
}));

app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/members", require("./routes/memberRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
