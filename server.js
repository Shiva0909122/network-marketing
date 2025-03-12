require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB(); // Connect to MongoDB Atlas

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", require("./routes/memberRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
