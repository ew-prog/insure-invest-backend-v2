import Lead from "../models/Lead.js";

export const createLead = async (req, res) => {
  try {
    const { name, email, phone, company, product } = req.body;

    if (!name || !email || !phone || !company) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    const newLead = new Lead({ name, email, phone, company, product });
    await newLead.save();

    res.status(201).json(newLead);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching leads", error });
  }
};
