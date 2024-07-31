document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("file");
  if (postId) {
    try {
      const response = await fetch(`/posts/${postId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch post content");
      }
      const markdownContent = await response.text();
      document.querySelector(".main-content").innerHTML = markdownContent;
      hljs.highlightAll();
    } catch (error) {
      console.error("Error loading post", error);
    }
  }
});
