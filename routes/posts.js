const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "posts.html"));
});

router.get("/list", async (req, res) => {
  try {
    const postsDir = path.join(__dirname, "../posts");
    const files = await fs.readdir(postsDir);
    const posts = await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(postsDir, file);
        const content = await fs.readFile(filePath, "utf-8");
        const title = content.split("\n")[0].replace(/^#\s*/, "");
        return { file, title };
      })
    );
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Unable to retrieve posts." });
  }
});

module.exports = router;
