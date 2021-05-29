// objeto llamado circulo, con el parametro de entrada que es el radio.
let circulo = (r) => {
    let radio = r;
    return {
        obtenerRadio: function () {
            return radio;
        },
        perimetro: function () {
            return 2 * Math.PI * radio;
        },
        area: function () {
            return  Math.PI * Math.pow(radio, 2);
        }
    };

};

calcular = () =>{
// Con la constante resultados hago referencia a el valor resultado que se encuentra en el hmtl.
const resultados = document.getElementById ('resultados');
// radio almacena los valores que ingreso en el hmtl y me da acceso el metodo value.
let radio = document.getElementById ('radio').value;

if (isNaN(radio)){
    alert('Ingrese un numero valido');
    resultados.style.display='none';
}else{
    resultados.style.display='block';
    // Al ingresar al hmtl, ingresara como una cadena de texto por ese motivo lo guardare en el siguiente
    // constructor de tipo numerico y lo convierta en un valor de tipo number.
    radio = new Number(radio);
    
    // inicializo mi elemento circulo pasandole el valor de radio que tome del valor anteior.
    const objCirculo = circulo(radio);
    document.getElementById('radioActual').innerHTML = `Radio ${objCirculo.obtenerRadio()} cm`;
    document.getElementById('perimetro').innerHTML = `Perimetro ${objCirculo.perimetro()} cm`;
    document.getElementById('area').innerHTML = `Area ${objCirculo.area()} cm<sup>2</sup>`;

}
}