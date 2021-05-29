// constructtor de date, para el inicio del mes inicia en el numero cero.
let fecha = new Date(2020, 0, 1);
let hoy = new Date();
// console.log(fecha);
// console.log(hoy);

// De esta manera estoy guardando el valor de año en una variable.
let año = fecha.getFullYear();
// console.log(fecha);

// Tambien se puede imprimir directamente.
// console.log(fecha.getMonth());
// console.log(fecha.getDate());

// Lo que hace modificar el valor de fecha, luego getDate toma el valor de fecha y le sumo 15 dias para 
// para que me de como fecha el 16 de enero.
fecha.setDate(fecha.getDate() + 15);
// console.log(fecha);

let fecha1 = new Date(2020, 1, 1, 12, 30);
let fecha2 = new Date(2020, 5, 27, 14, 30);

fecha1.setHours(0, 0, 0);
fecha2.setHours(0,0, 0);
if (fecha1.getTime() == fecha2.getTime()){
    console.log("Las horas si son iguales")
}else {
    console.log("No, las horas no son iguales");
}

// Esto esta dado en milisegundos por eso me da ese resultado con ese numero tan alto.
let intervalos = fecha2 - fecha1;
console.log(intervalos);
// Lo que se deb hacer es hacer una operacion matematica donde se divide los milisegundos entre
// Las horas del dia, los minutos de la hora, los segundos del minuto y las milesimas del segundo.
let dias = intervalos/(24*60*60*1000);
console.log (dias);