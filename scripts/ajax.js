document.getElementById("cargar").addEventListener("click", () => {
    fetch("datos.json")
      .then(res => res.json())
      .then(usuarios => {
        const lista = document.getElementById("lista");
        lista.innerHTML = "";
        usuarios.forEach(u => {
          const li = document.createElement("li");
          li.textContent = `${u.nombre} - ${u.email}`;
          lista.appendChild(li);
        });
      });
  });