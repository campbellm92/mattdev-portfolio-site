const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "posts.html"));
});

router.get("/list", (req, res) => {
  const postsDir = path.join(__dirname, "../posts");
  fs.readdir(postsDir, (error, files) => {
    if (error) {
      return res.status(500).json({ error: "Unable to read posts directory." });
    }
    const posts = files.map((file) => {
      const filePath = path.join(postsDir, file);
      const content = fs.readFileSync(filePath, "utf-8");
      const title = content.split("\n")[0].replace(/^#\s*/, "");
      return { file, title };
    });
    res.json(posts);
  });
});

module.exports = router;
