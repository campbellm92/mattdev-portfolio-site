const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../public", "contact.html"));
  } catch (error) {
    res.status(500).json({ error: "Unable to retrieve contact page." });
  }
});

module.exports = router;
