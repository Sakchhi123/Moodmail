const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// Dummy route to simulate AI response
app.post("/generate", async (req, res) => {
  const { content, tone } = req.body;

  // Fake AI reply for demo
  const fakeReply = `This is a ${tone} email based on your input: "${content}"`;

  res.json({ generated: fakeReply });
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});

