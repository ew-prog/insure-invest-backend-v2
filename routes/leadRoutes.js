import express from "express";
import Lead from "../models/Lead.js";

const router = express.Router();

// Create new lead
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, company, product } = req.body;

    if (!name || !email || !phone || !company)
      return res.status(400).json({ message: "All required fields must be filled" });

    const newLead = new Lead({ name, email, phone, company, product });
    await newLead.save();
    res.status(201).json(newLead);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all leads
router.get("/", async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch leads" });
  }
});

export default router;
