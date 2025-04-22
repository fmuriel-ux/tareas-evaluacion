document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const modoBtn = document.getElementById("modoToggle");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Modo oscuro/claro
  modoBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    modoBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("modoOscuro", isDark ? "true" : "false");
  });

  // Cargar preferencia
  const modoGuardado = localStorage.getItem("modoOscuro");
  if (modoGuardado === "true") {
    document.body.classList.add("dark-mode");
    modoBtn.textContent = "☀️";
  }
});