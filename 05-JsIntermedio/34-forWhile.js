let miArray = [];
console.log(miArray);
console.log(miArray.push(1));
console.log(miArray.push(2));
console.log(miArray.push(4));
console.log(miArray);

for (let i = 0; i < 10; i++) {
  miArray.push(i);
}
console.log(miArray);

let miArray2 = ['hola', 'buen dia', 'adios'];

function convertMayus(texto) {
  const res = texto.toUpperCase();
  console.log(res);
}

console.log(convertMayus('agasgasgasg'));

console.log(miArray2.forEach(convertMayus));
