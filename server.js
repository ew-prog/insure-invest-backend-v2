import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import leadRoutes from "./routes/leads.js"

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err))

app.get("/", (req, res) => {
  res.send("InsureInvest Backend API is running...")
})

app.use("/api/v1/leads", leadRoutes)

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
