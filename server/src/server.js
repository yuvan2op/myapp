import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

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
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on http://0.0.0.0:${PORT}`);
}).on("error", (err) => {
  console.error("Server error:", err);
});

