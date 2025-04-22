ocument.getElementById("contacto").addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = this.nombre.value.trim();
    const email = this.email.value.trim();
    const mensaje = this.mensaje.value.trim();
  
    if (!nombre || !email || !mensaje) {
      document.getElementById("estado").textContent = "Por favor, completa todos los campos.";
      return;
    }
  
    document.getElementById("estado").textContent = "Formulario enviado correctamente ✅";
    this.reset();
  });