// Prototypes
function MiObjeto(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.getNombreCompleto = function () {
    return `${this.nombre} ${this.apellido}`;
  };
}

const objeto1 = new MiObjeto('Camilo', 'Montoya');
console.log(objeto1);

const objetoJson = {
  nombre: 'Camilo',
  apellido: 'Montoya',
  getNombreCompleto: function () {
    return `${this.nombre} ${this.apellido}`;
  },
};
