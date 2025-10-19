import mongoose from "mongoose"

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  insuranceCompany: String,
  product: String,
}, { timestamps: true })

export default mongoose.model("Lead", leadSchema)
