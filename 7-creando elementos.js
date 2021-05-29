agregarElemento = () =>{
    // Linea 4 elemento padre
    // Con el document.querySelector elegimos el documento que deseamos seleccionar.
    let elemento = document.querySelector('section')
    // Con el document.createElement, creo el elemento y elijo si quiero que se de tipo parrafo o de cualquier otro tipo.
    let nuevo = document.createElement("p");
    // Con la siguiente linea introduzco el texto a mi elemento, ya anteriormente lo deje vacio.
    nuevo.innerHTML = 'Sere algun dia un buen programador';
    // El elemento appendChild lo que hace es añadirlo al elemento padre, y le pasamos la referencia a nuestro
    // objeto en este caso es (nuevo), es añadir un nuevo elemento hijo a nuestro elemento padre.
    // en este caso todo lo que esta encapsulado con la querySelector de la section.
    elemento.appendChild(nuevo);
}

eliminarElemento = () => {
    // Le decimos en que seccion esta ubicado el elemento padre
    let elemento = document.querySelector('section');
    // Este seria el elemento hijo. 
    let eliminar = document.getElementById('subtitulo');
    elemento.removeChild(eliminar);

}