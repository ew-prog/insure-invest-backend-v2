import express from "express";
import { submitLead, getLeads } from "../controllers/leadController.js";

const router = express.Router();

router.post("/", submitLead);       // POST /api/v1/leads
router.get("/", getLeads);         // GET /api/v1/leads (for dashboard)

export default router;
