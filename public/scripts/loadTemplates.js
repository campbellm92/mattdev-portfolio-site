async function loadTemplates(selector, url) {
  try {
    const response = await fetch(url);
    if (!response) {
      throw new Error("Network not responding.");
    }
    const data = await response.text();
    document.querySelector(selector).innerHTML = data;
  } catch (err) {
    console.log("Error loading HTML", err);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadTemplates(".header-content", "/templates/header.html");
  await loadTemplates(".footer-content", "/templates/footer.html");
});
