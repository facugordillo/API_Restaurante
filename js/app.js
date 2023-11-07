document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar elementos del DOM

  const fecha = document.getElementById("fechaInput");
  const hora = document.getElementById("horaInput");
  const nombre = document.getElementById("horaInput");
  const telefono = document.getElementById("telefonoInput");
  const cant_personas = document.getElementById("personasInput");
  const reservarBtn = document.getElementById("reservarBtn");
  const sucursales = document.getElementById("sucursalesInput");
  const reservasCard = document.getElementById("reservas");

  let dataTodasReservas = []; // Almacenar datos de Reservas

  let dataTodasSucursales = []; // Almacenar datos de Sucursales

  function ObtenerReservas() {
    fetch("http://localhost:54468/api/Reserva")
      .then((response) => response.json())
      .then((dataReservas) => {
        console.log(dataReservas);
        
        });
      }
    
})
