// controllers/leadController.js
import Lead from "../models/Lead.js";

export const createLead = async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    res.status(201).json({ message: "Lead created successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error creating lead", error });
  }
};

export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ message: "Error fetching leads", error });
  }
};
