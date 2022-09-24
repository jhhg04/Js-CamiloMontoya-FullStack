// Objects, se destructura con el mismo nombre, solo lo que necesito
const miObjeto = {
  a: 1,
  b: 2,
  c: 'hola',
  d: function () {
    console.log('Soy una funcion');
  },
  e: true,
  f: {
    f1: 'Soy f1',
    f2: 'Soy f2',
    f3: () => {},
  },
};

const { e } = miObjeto;
// console.log(e);
// e = false; // No se puede asignar
const { a, ...resto } = miObjeto;
// console.log(resto);
const miObjeto2 = miObjeto;
// console.log(miObjeto2);
miObjeto2.c = 'Otra Cosa';
// console.log(miObjeto);
const Objeto3 = { ...miObjeto };
// console.log(Objeto3);
Objeto3.c = 'nuevo String';
// console.log(miObjeto);
// console.log(Objeto3);

// Clone Deep No Muta
const miObjeto5 = JSON.parse(JSON.stringify(miObjeto));
console.log(miObjeto);
console.log(miObjeto5);
miObjeto5.f.f1 = 'he cambiado';
console.log(miObjeto5);
console.log(miObjeto);

// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

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
// const [uno, dos, ...resto] = miArray;
// console.log(resto);

// console.log(numUno);
// console.log(numDos);
// console.log(hola);
// console.log(unaFuncion);
// console.log(buleoano);

// Spred Oparator, permite hacer una copia del Array/Object ...
// const { d, ...otros } = miObjeto;
// console.log(d);
// console.log(otros);
