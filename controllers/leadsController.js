import Lead from "../models/Lead.js";

// Submit a lead
export const submitLead = (req, res) => {
  try {
    const { name, email, phone, product, zip } = req.body;
    if (!name || !email || !phone || !product) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newLead = Lead.create({ name, email, phone, product, zip });
    res.status(201).json({ success: true, lead: newLead });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get all leads
export const getLeads = (req, res) => {
  try {
    const allLeads = Lead.all();
    res.json({ success: true, leads: allLeads });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
