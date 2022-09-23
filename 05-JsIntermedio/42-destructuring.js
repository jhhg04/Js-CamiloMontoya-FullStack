// Objects, se destructura con el mismo nombre, solo lo que necesito
const miObjeto = {
  a: 1,
  b: 2,
  c: 'hola',
  d: function () {
    console.log('Soy una funcion');
  },
  e: true,
};

// const { a, b, c, d, e } = miObjeto;
// const { c } = miObjeto;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(miObjeto.d());

// Arrays,se destructura con el mismo orden y no importa el nombre,debo dejar espacios
const miArray = [
  1,
  2,
  'hola',
  () => {
    console.log('Soy una funcion');
  },
  true,
];

// const [numUno, numDos, hola, unaFuncion, buleoano] = miArray;
// const [, , hola] = miArray;
const [uno, dos, ...resto] = miArray;
console.log(resto);

// console.log(numUno);
// console.log(numDos);
// console.log(hola);
// console.log(unaFuncion);
// console.log(buleoano);

// Spred Oparator, permite hacer una copia del Array/Object ...
// const { d, ...otros } = miObjeto;
// console.log(d);
// console.log(otros);
