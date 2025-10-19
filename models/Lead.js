import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    company: { type: String, required: true },
    product: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Lead", LeadSchema);
