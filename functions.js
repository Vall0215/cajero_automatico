function formatearPesos(valor) {
    return valor.toLocaleString('es-CO', { 
        style: 'currency', currency: 'CLP' });
}

function crearMensajeMovimiento(tipo, monto) {
    return `${tipo} realizado por ${formatearPesos(monto)}`;
}