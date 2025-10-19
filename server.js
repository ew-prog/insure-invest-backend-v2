import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Import LeadRoutes correctly relative to server.js
import LeadRoutes from "./routes/LeadRoutes.js"; // <-- this path is correct if server.js and routes/ are in same folder

dotenv.config();

const app = express();

// Middleware
app.use(cors()); // enable CORS globally
app.use(express.json());

// Routes
app.use("/api/v1/leads", LeadRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
