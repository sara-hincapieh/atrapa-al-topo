const cuadrado = document.querySelectorAll(".cuadrado");
const tiempofaltante = document.querySelector("#tiempo");
let puntaje = document.getElementsById("puntaje");

//

let resultado = 0;
let tiempoactual = tiempofaltante.textContent;

function cuadradoazar() {
  cuadrado.forEach((nombredeclase) => {
    nombredeclase.classList.remove("topo");
  });
  let posicionalazar = cuadrado[Math.floor(Math.random() * 9)];
  posicionalazar.classList.add("topo");

  posiciontopo = posicionalazar.id;
}

cuadrado.forEach((identificador) => {
  identificador.addEventListener("click", () => {
    if (identificador.id === posiciontopo) {
      resultado = resultado + 1;
      puntaje.textContent = resultado;
      posicionalazar = null;
    }
  });
});

function movertopo() {
  tiempotopo = setInterval(cuadradoazar, 700);
}
movertopo();
function cuentaregresiva() {
  tiempoactual--;
  tiempofaltante.textContent = tiempoactual;
  if (tiempoactual == 0) {
    clearInterval(idtiempo);
    clearInterval(idtiempotopo);
    alert("se acabo el tiempo tu puntaje fue" + resultado + "topos atrapados");
  }
}
