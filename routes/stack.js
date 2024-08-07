const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../public", "stack.html"));
  } catch (error) {
    res.status(500).json({ error: "Unable to retrieve stack page." });
  }
});

module.exports = router;
