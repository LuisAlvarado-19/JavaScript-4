// let lista = new array[10, 43, 56, 27, 100, 76];
let lista = [10, 43, 56, 27, 100, 76, 10];
// console.log(`Nuestra lista tiene ${lista.length} elementos.`);
let suma = 0;

for(let i = 0; i < lista.length; i++){
    suma += lista[i];
}
// console.log(`El total de la suma es ${suma}.`);

let subLista = lista.slice(0, 3);
// console.log(`Los valores de la sublista son ${subLista}.`);

let listaPar = lista.filter((item) => {
    return item % 2 == 0;
});
// console.log(`Los numeros pares son ${listaPar}.`);

let listaImpar = lista.filter((impar) => {
    return impar % 2 == 1;
});
// console.log(`La lis de los numeros impares es ${listaImpar}.`);

let cadenaArray = lista.join('-');
// console.log(cadenaArray)

let valor = 10;
let index = 0;
let contador = 0;
// let index = lista.indexOf(valor);
// console.log(`El valor de la posicion ${lista[index]} se encuentra en la posicion ${index}`)

// el while dice que mientreas el index sea mayor a cero siga buscando en el array.
while (index >= 0){
// Index es igual a lista.indexOf tiene la variable valor, que esta definida arriba en la linea 27, y el segundo
// parametro lo que hace es que ya no inicia desde la posicion cero sino que inicia desde donde encontro el ultimo
// valor 
    index = lista.indexOf(valor, index);
    if (index >= 0){
        index++;
// El contador, nos dira la cantidad de veces que hay un mismo valor.
        contador++;
    }
}
// console.log(`Existen ${contador} elementos con el valor de ${valor}`);

// console.log(lista);
lista.push(1200);
// console.log(lista);

let nuevaLista= [1,2,3,4,5];
let grupo = nuevaLista.concat(lista);
// console.log(grupo);

// grupo.shift();
// console.log(grupo);
// grupo.pop();
// console.log(grupo);

// let subLista2  = grupo.slice(0,3);
// let removidos = grupo.splice(0, 3);
// console.log(removidos);
// console.log(grupo);
// grupo.reverse();
// console.log(grupo);

console.log(lista);
// lista.sort();
lista.sort((a, b) => {return a > b});
console.log(lista);

let nuevoListado = lista.map((item) => {return item * 10});
// console.log(nuevoListado);