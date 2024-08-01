const express = require("express");
const fs = require("fs");
const path = require("path");
const { marked } = require("marked");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "templates", "post.html"));
});

router.get("/:file", (req, res) => {
  const filePath = path.join(__dirname, "../posts", req.params.file);
  fs.readFile(filePath, "utf-8", (error, content) => {
    if (error) {
      return res.status(404).send("Post not found.");
    }
    const htmlContent = marked(content);
    res.setHeader("Content-Type", "text/html");
    res.send(htmlContent);
  });
});

module.exports = router;
