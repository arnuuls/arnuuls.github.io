const toggleBtn = document.getElementById("menu-toggle");
const fullscreenMenu = document.getElementById("fullscreen-menu");

toggleBtn.addEventListener("click", () => {
  fullscreenMenu.style.display = fullscreenMenu.style.display === "flex" ? "none" : "flex";
});