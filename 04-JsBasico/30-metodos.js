const persona = {
  nombre: 'Maria',
  apellido: 'Martinez',
  id: 5,
  nombreCompleto: function () {
    return `${this.nombre} ${this.apellido}`;
  },
};
// console.log(persona.nombreCompleto());

const miArray = [1, 2, 3, 'hola', 28, { a: 1 }];
let iterador = miArray[Symbol.iterator]();

// console.log(typeof miArray);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
