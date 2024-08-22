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

const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
