// setTimeout(() => {
//   console.log('me ejecute despues');
// }, 3000);

// const funcionCallBack = () => {
//   console.log('me ejecute despues');
// };

// const ejecutarMasTarde = () => {
//   setTimeout(() => {
//     funcionCallBack();
//   }, 3000);
// };

// ejecutarMasTarde();

function sumar(num1, num2) {
  return num1 + num2;
}

function restar(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

// function multiFuncion(num1, num2, operacion) {
//   const res = operacion(num1, num2);
//   console.log(res);
// }

function multiFuncion(num1, num2, cb) {
  const res = cb(num1, num2);
  console.log(res);
}

multiFuncion(5, 4, sumar);
multiFuncion(5, 4, multiplicar);
