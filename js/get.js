Get();

function Get() {
  fetch("http://localhost:54468/api/Reserva")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const tbody = document.querySelector("ul");

      data.forEach((o) => {
        let _li = ` <li>${o.Nombre}</li>
                    <li>${o.telefono}</li>
                    <li>${o.fecha}</li>
                    <li>${o.hora}</li>
                    <li>${o.cant_personas}</li>
                    `

        URL.innerHtml += _li;
      });
    });
}
