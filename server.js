const dns = require("node:dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "100kb" }));

// Authentication Routes
app.use("/api/auth", require("./routes/authRoute"));

// Health Check
app.get("/", (req, res) => {
  res.send("ProposalPilot AI Backend is running...");
});

// Invalid JSON / request errors
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    message:
      err.status === 400
        ? "Invalid request body"
        : "Internal server error",
  });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();