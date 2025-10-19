import express from "express";
import { createLead, getLeads } from "../controllers/leadsController.js";

const router = express.Router();

// Enable CORS for this router (optional, already enabled globally)
router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Routes
router.post("/", createLead);
router.get("/", getLeads);

export default router;
