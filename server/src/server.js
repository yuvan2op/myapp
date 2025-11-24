import express from "express";

const app = express();
const PORT = 3000;

// Simple API
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// ADD YOUR USERS ROUTE HERE ↓↓↓
app.get("/api/users", (req, res) => {
  res.json([
    { name: "John" },
    { name: "Alex" },
    { name: "Maya" }
  ]);
});

// Server Start
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

