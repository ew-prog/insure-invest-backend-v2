import express from "express";
import { createLead, getLeads } from "../controllers/leadsController.js";

const router = express.Router();

// Routes
router.post("/", createLead);
router.get("/", getLeads);

export default router;
