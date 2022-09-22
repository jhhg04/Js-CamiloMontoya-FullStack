let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function soloPares(numActual) {
  return numActual % 2 === 0;
}

let resMap = miArray.map(soloPares);
let resFilter = miArray.filter(soloPares);

const resFilter2 = miArray.filter((numActual) => {
  return numActual % 2 === 0;
});

const resFilter3 = miArray.filter((numActual) => numActual % 2 === 0);

const onlyPares = (numActual) => numActual % 2 === 0;

const resFilter4 = miArray.filter(onlyPares);

console.log(resMap);
console.log(resFilter);
console.log(resFilter2);
console.log(resFilter3);
console.log(resFilter4);
