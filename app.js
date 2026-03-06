let saldo = 100000;

const saldoElemento = document.getElementById("saldo");
const montoInput = document.getElementById("monto");
const mensajeElemento = document.getElementById("mensaje");
const historialElemento = document.getElementById("historial");

const depositarBtn = document.getElementById("depositarBtn");
const retirarBtn = document.getElementById("retirarBtn");

function actualizarSaldo() {
  saldoElemento.textContent = formatearPesos(saldo);
}

function mostrarMensaje(texto, tipo) {
  mensajeElemento.textContent = texto;
  mensajeElemento.className = tipo;
}

function agregarHistorial(texto) {
  const item = document.createElement("li");
  item.textContent = texto;
  historialElemento.prepend(item);
}

function obtenerMonto() {
  const monto = Number(montoInput.value);

  if (montoInput.value.trim() === "" || Number.isNaN(monto)) {
    mostrarMensaje("Por favor, ingresa un valor válido.", "error");
    return null;
  }

  if (monto <= 0) {
    mostrarMensaje("El monto debe ser mayor que cero.", "error");
    return null;
  }

  return monto;
}

depositarBtn.addEventListener("click", () => {
  const monto = obtenerMonto();

  if (monto === null) {
    return;
  }

  saldo += monto;
  actualizarSaldo();

  const mensaje = crearMensajeMovimiento("Depósito", monto);
  mostrarMensaje("Depósito realizado correctamente.", "success");
  agregarHistorial(mensaje);

  montoInput.value = "";
});

retirarBtn.addEventListener("click", () => {
  const monto = obtenerMonto();

  if (monto === null) {
    return;
  }

  if (monto > saldo) {
    mostrarMensaje("Saldo insuficiente para realizar el retiro.", "error");
    return;
  }

  saldo -= monto;
  actualizarSaldo();

  const mensaje = crearMensajeMovimiento("Retiro", monto);
  mostrarMensaje("Retiro realizado correctamente.", "success");
  agregarHistorial(mensaje);

  montoInput.value = "";
});

actualizarSaldo();