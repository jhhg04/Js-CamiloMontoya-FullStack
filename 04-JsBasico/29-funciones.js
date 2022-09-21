function sumar(numeros, r) {
  console.log(arguments);
  const resultado = numeros.num1 + numeros.num2;
  return resultado;
}

// const r = sumar(1, 2, 3);
const r = sumar({ num1: 1, num2: 2 }, '5', 'hello');
// const z = sumar(5, 6);
const z = sumar({ num1: 5, num2: 6 });
// const y = sumar(r, z);
const y = sumar({ num1: r, num2: z });
console.log(sumar({ num1: z, num2: z }));
