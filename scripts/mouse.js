document.querySelectorAll(".interactivo").forEach(p => {
    p.addEventListener("mouseenter", () => {
      p.textContent = p.textContent.toUpperCase();
    });
    p.addEventListener("mouseleave", () => {
      p.textContent = p.textContent.toLowerCase();
    });
  });