function formatearPesos(valor) {
  return valor.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0
  });
}

function crearMensajeMovimiento(tipo, monto) {
  return `${tipo} realizado por ${formatearPesos(monto)}`;
}

function agregarHistorial(texto) {
  const item = document.createElement("li");
  item.textContent = texto;
  document.getElementById("historial").prepend(item);
}