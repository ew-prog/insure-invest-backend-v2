import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import LeadRoutes from "./routes/LeadRoutes.js"; // router

dotenv.config();

const app = express();

// CORS - allow only your live frontend
app.use(cors({
  origin: "https://insure-invest-frontend-1.onrender.com"
}));

// JSON parsing middleware
app.use(express.json());

// Routes
app.use("/api/v1/leads", LeadRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
