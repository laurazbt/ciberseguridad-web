document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formularioContacto");

  formulario.addEventListener("submit", function (event) {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
      alert("Por favor, completa todos los campos del formulario.");
      event.preventDefault(); // Detiene el envío del formulario
    }
  });
});

