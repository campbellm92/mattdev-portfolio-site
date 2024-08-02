document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("/projects/list");
    const projects = await response.json();

    const projectList = document.querySelector(".projects-list");
    projects.forEach((project) => {
      const projectItem = document.createElement("li");
      projectItem.style.cssText = "margin-bottom: 24px; color: #fafad2;";
      const a = document.createElement("a");
      a.href = `/project?file=${project.file}`;
      a.textContent = project.title;
      a.style.cssText = "color: inherit; text-decoration: none;";
      projectItem.appendChild(a);
      projectList.appendChild(projectItem);
    });
  } catch (error) {
    console.log("Error fetching projects", error);
  }
});
