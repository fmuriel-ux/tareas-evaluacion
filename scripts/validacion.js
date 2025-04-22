document.getElementById("formularioContacto").addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = this.nombre.value.trim();
  const email = this.email.value.trim();
  const mensaje = this.mensaje.value.trim();
  const estado = document.getElementById("estado");

  if (!nombre || !email || !mensaje) {
    estado.textContent = "Por favor, completa todos los campos.";
    estado.style.color = "crimson";
    return;
  }

  if (!validarEmail(email)) {
    estado.textContent = "Introduce un correo electrónico válido.";
    estado.style.color = "crimson";
    return;
  }

  estado.textContent = "Mensaje enviado correctamente ✅";
  estado.style.color = "seagreen";
  this.reset();
});

function validarEmail(correo) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
}
  