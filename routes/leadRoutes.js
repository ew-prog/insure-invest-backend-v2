import express from "express";
import { createLead, getLeads } from "../controllers/leadsController.js";

const router = express.Router();

// Enable CORS for this router
router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow all origins
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Routes
router.post("/", createLead);
router.get("/", getLeads);

export default router;
