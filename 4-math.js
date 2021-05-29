let valor = new Number(123.645);
console.log(valor);

console.log(`Numero PI: ${Math.PI}`);
console.log(`Constante de Euler: ${Math.E}`);

// Math.ceil, mostrara el entero mas proximo hacia arriba.
console.log(`ceil: ${Math.ceil(valor)}`);

// Math.floor, mostrara el entero mas proximo hacia abajo.
console.log(`floor: ${Math.floor(valor)}`);

// Math.round, tomara los decimales y decidira si es mas facil o correcto subir al proximo entero o bajar al anterior.
console.log(`round: ${Math.round(valor)}`);

// Math.trunc, eliminara los decimales y dejara el numero entero.
console.log(`trunc: ${Math.trunc(valor)}`);


// El siguiente metodo transforma un numero negativo que le pasemos a positivo.
console.log(`ABS: ${Math.abs(-50)}`);

// El metodo max lo que hace es que de una serie de numeros como parametro de entrada elije el mayor y lo imprime.
console.log(`max: ${Math.max(10, 20, 30, 120)}`);

// El metodo min hace lo contrario, tomara el numero menor y lo mostrara.
console.log(`min: ${Math.min(10 , 20, 30, 5)}`);

// Math.ramdon lo que hace es que genera un numero aleatorio.
console.log(`Ramdon: ${Math.random()}`);

let limiteMax = 25;
let limiteMin = 15;
let intervalo = Math.trunc(Math.random() * ( limiteMax - limiteMin) + limiteMin);
console.log(`Numero aleatorio ente 15 y 25: ${intervalo}`);

// Para sacar el exponencial de un numero lo que se utiliza es math.pow
// en el ejemplo siguiente seria el exponencial de 2 a la 10,
console.log(Math.pow(2, 10));

// El siguiente es para sacar la raiz cuadrada y se llama sqrt
console.log(Math.sqrt(36));