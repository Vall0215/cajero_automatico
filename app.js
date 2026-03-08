let saldo = 50000;

function actualizarSaldo() {
  document.getElementById("saldo").innerText = formatearPesos(saldo);
}

function depositar() {
  let monto = Number(document.getElementById("monto").value);

  if (monto <= 0 || isNaN(monto)) {
    alert("Ingrese un monto válido");
    return;
  }

  saldo += monto;
  actualizarSaldo();

  let mensaje = crearMensajeMovimiento("Depósito", monto);
  agregarHistorial(mensaje);

  document.getElementById("monto").value = "";
}

function retirar() {
  let monto = Number(document.getElementById("monto").value);

  if (monto <= 0 || isNaN(monto)) {
    alert("Ingrese un monto válido");
    return;
  }

  if (monto > saldo) {
    alert("Saldo insuficiente");
    return;
  }

  saldo -= monto;
  actualizarSaldo();

  let mensaje = crearMensajeMovimiento("Retiro", monto);
  agregarHistorial(mensaje);

  document.getElementById("monto").value = "";
}

actualizarSaldo();