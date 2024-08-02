document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("/posts/list");
    const posts = await response.json();

    const postList = document.querySelector(".posts-list");
    posts.forEach((post) => {
      const postItem = document.createElement("li");
      postItem.style.cssText = "margin-bottom: 24px; color: #fafad2;";
      const a = document.createElement("a");
      a.href = `/post?file=${post.file}`;
      a.textContent = post.title;
      a.style.cssText = "color: inherit; text-decoration: none;";
      postItem.appendChild(a);
      postList.appendChild(postItem);
    });
  } catch (error) {
    console.log("Error fetching posts", error);
  }
});
