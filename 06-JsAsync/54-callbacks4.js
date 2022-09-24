// CallBack Hell

// setTimeout(() => {
//   console.log('Ejecucion1');
//   setTimeout(() => {
//     console.log('Ejecucion2');
//     setTimeout(() => {
//       console.log('Ejecucion3');
//       setTimeout(() => {
//         console.log('Ejecucion4');
//       }, 4000);
//     }, 10000);
//   }, 2000);
// }, 3000);

// Resolve CallBack Hell, poner nombre a las funciones y ponerlas independientes

const funcion4 = () => {
  console.log('Ejecucion4');
};

const funcion3 = () => {
  console.log('Ejecucion3');
  setTimeout(funcion4, 4000);
};

const funcion2 = () => {
  console.log('Ejecucion2');
  setTimeout(funcion3, 10000);
};

const funcion1 = () => {
  console.log('Ejecucion1');
  setTimeout(funcion2, 2000);
};
setTimeout(funcion1, 3000);
