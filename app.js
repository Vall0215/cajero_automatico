let saldo = 100000;

function actualizarSaldo() {
  document.getElementById("saldo").innerText = "$" + saldo;
}

function depositar() {

  let monto = Number(document.getElementById("monto").value);

  if(monto <= 0){
    alert("Ingrese un monto válido");
    return;
  }

  saldo += monto;

  actualizarSaldo();

  agregarHistorial("Depósito de $" + monto);
}

function retirar(){

  let monto = Number(document.getElementById("monto").value);

  if(monto > saldo){
    alert("Saldo insuficiente");
    return;
  }

  saldo -= monto;

  actualizarSaldo();

  agregarHistorial("Retiro de $" + monto);
}

actualizarSaldo();