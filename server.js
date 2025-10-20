import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import LeadRoutes from "./routes/LeadRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || "*" })); // allow frontend access
app.use(express.json());

// Routes
app.use("/api/v1/leads", LeadRoutes);

// Root
app.get("/", (req, res) => {
  res.send("InsureInvest Backend v2 running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
