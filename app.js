const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");
const postsRouter = require("./routes/posts"); // the "posts" page
const postRouter = require("./routes/post"); // an instance of a page with an actual blog post
const projectsRouter = require("./routes/projects");
const stackRouter = require("./routes/stack");
const nowRouter = require("./routes/now");
const contactRouter = require("./routes/contact");

const app = express();

const PORT = 3000;

app.use(
  express.static(path.join(__dirname, "public"), {
    extensions: ["html"],
  })
);
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));

app.use("/", indexRouter);
app.use("/posts", postsRouter);
app.use("/post", postRouter);
app.use("/projects", projectsRouter);
app.use("/stack", stackRouter);
app.use("/now", nowRouter);
app.use("/contact", contactRouter);

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/posts", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "posts.html"));
// });

// app.get("/posts-list", (req, res) => {
//   const postsDir = path.join(__dirname, "posts");
//   fs.readdir(postsDir, (error, files) => {
//     if (error) {
//       return res.status(500).json({ error: "Unable to read posts directory." });
//     }
//     const posts = files.map((file) => {
//       const filePath = path.join(postsDir, file);
//       const content = fs.readFileSync(filePath, "utf-8");
//       const title = content.split("\n")[0].replace(/^#\s*/, "");
//       return { file, title };
//     });
//     res.json(posts);
//   });
// });

// app.get("/post", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "templates", "post.html"));
// });

// app.get("/posts/:file", (req, res) => {
//   const filePath = path.join(__dirname, "posts", req.params.file);
//   fs.readFile(filePath, "utf-8", (error, content) => {
//     if (error) {
//       return res.status(404).send("Post not found.");
//     }
//     const htmlContent = marked(content);
//     res.send(htmlContent);
//   });
// });

// app.get("/projects", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "projects.html"));
// });

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
