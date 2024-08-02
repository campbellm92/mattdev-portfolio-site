document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("/posts/list");
    const posts = await response.json();

    const postList = document.querySelector(".page-list");
    posts.forEach((post) => {
      const postItem = document.createElement("li");
      const a = document.createElement("a");
      a.href = `/post?file=${post.file}`;
      a.textContent = post.title;
      postItem.appendChild(a);
      postList.appendChild(postItem);
    });
  } catch (error) {
    console.log("Error fetching posts", error);
  }
});
