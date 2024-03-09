let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el numero secreto en ${intentos} ${
        intentos === 1 ? "vez" : "veces"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
    document.getElementById("verificar").setAttribute("disabled", true);
  } else {
    if (numeroUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero es menor");
    } else {
      asignarTextoElemento("p", "El numero es mayor");
    }
    intentos++;
    limpiarInput();
  }

  return;
}

function estadoInicial() {
  //establece los titulos a su estado inicial.
  asignarTextoElemento("h1", "El juego del numero secreto");
  asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);

  //genera un nuevo numero aleatorio.
  numeroSecreto = generarNumeroSecreto();
  //Reinicia nuestro contador para un nuevo juego.
  intentos = 1;

  //Reestablece el estado inicial de los botones.
  document.getElementById("verificar").removeAttribute("disabled");
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

function reiniciarJuego() {
  limpiarInput();
  estadoInicial();
}

function limpiarInput() {
  document.getElementById("valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);

  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se generaron todos los numeros posibles!");
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

estadoInicial();
