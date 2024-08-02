document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("/projects/list");
    const projects = await response.json();

    const projectList = document.querySelector(".page-list");
    projects.forEach((project) => {
      const projectItem = document.createElement("li");
      const a = document.createElement("a");
      a.href = `/project?file=${project.file}`;
      a.textContent = project.title;
      projectItem.appendChild(a);
      projectList.appendChild(projectItem);
    });
  } catch (error) {
    console.log("Error fetching projects", error);
  }
});
