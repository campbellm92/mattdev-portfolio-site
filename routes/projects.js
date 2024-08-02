const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../public", "projects.html"));
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/list", async (req, res) => {
  try {
    const projectsDir = path.join(__dirname, "../projects");
    const files = await fs.readdir(projectsDir);
    const projects = await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(projectsDir, file);
        const content = await fs.readFile(filePath, "utf-8");
        const title = content.split("\n")[0].replace(/^#\s*/, "");
        return { file, title };
      })
    );
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Unable to retrieve posts." });
  }
});

module.exports = router;
