import Lead from "../models/Lead.js"

export const createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body)
    res.status(201).json(lead)
  } catch (error) {
    res.status(500).json({ message: "Error creating lead", error })
  }
}

export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 })
    res.json(leads)
  } catch (error) {
    res.status(500).json({ message: "Error fetching leads", error })
  }
}
