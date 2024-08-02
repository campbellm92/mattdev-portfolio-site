document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("file");
  if (projectId) {
    try {
      const response = await fetch(`/project/${projectId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch project content");
      }
      const markdownContent = await response.text();
      document.querySelector(".main-content").innerHTML = markdownContent;
      hljs.highlightAll();
    } catch (error) {
      console.error("Error loading project", error);
    }
  }
});
