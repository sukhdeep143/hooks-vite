const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");


dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Simple API route
app.get("/", (req, res) => {
  res.send("Express Backend is Running!");
});

// User Routes (Optional)
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});