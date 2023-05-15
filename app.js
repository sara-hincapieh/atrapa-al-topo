const cuadrado= document.querySelectorAll(".cuadrado");
const tiempofaltante = document.querySelector("#tiempo");
let puntaje = document.getElementsById ("puntaje")

//

let resultado= 0;
let tiempoactual= tiempofaltante.textContent


function cuadradoazar {
  cuadrado.forEach (nombredeclase => {
    nombredeclase.classList.remove ("topo");
  })
  let posicionalazar = cuadrado [Math.floor(Math.random() *9)]
  posicionalazar.classList.add("topo");
  posiciontopo.posicionalazar.Id
}




cuadrado.forEach(identificador =>{
  identificador.addEventListener("click"()=> {
if (identificador.Id === posiciontopo){
  resultado = resultado +1;
  puntaje.textContent = resultado;
  posiciontopo= null;
}
  })
  })