// const express = require("express");
// const fs = require("fs");
// const path = require("path");
// const { marked } = require("marked");
// const router = express.Router();

// router.get("/", (req, res) => {
//   try {
//     res.sendFile(
//       path.join(__dirname, "../public", "templates", "project.html")
//     );
//   } catch (error) {
//     res.status(500).json({ error: "Unable to retrieve project page." });
//   }
// });

// router.get("/:file", (req, res) => {
//   const filePath = path.join(__dirname, "../projects", req.params.file);
//   fs.readFile(filePath, "utf-8", (error, content) => {
//     if (error) {
//       return res.status(404).send("Project not found.");
//     }
//     const htmlContent = marked(content);
//     res.setHeader("Content-Type", "text/html");
//     res.send(htmlContent);
//   });
// });

// module.exports = router;
