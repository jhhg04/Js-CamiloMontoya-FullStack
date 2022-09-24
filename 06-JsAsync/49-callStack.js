function obtenerNombre() {
  return 'Camilo';
}

function obtenerApellido() {
  return 'Montoya';
}

function obtenerNombreCompleto() {
  const nombre = obtenerNombre();
  const apellido = obtenerApellido();
  return `${nombre} ${apellido}`;
}

const nombreCompleto = obtenerNombreCompleto();
console.log('Nombre Completo', nombreCompleto);
