iniciar = () => {
    let elemento = document.getElementById('subtitulo');
    elemento.style.width = '300px';
    elemento.style.border = '5px solid #FF0000';
    elemento.style.padding = '10px';
};

modificarProps = () => {
    let elemento = document.getElementById('subtitulo');
    // clientWidth nos provee el ancho de nuestro elemento.
    let ancho = elemento.clientWidth;
    // le da el valor a ancho de 100
    ancho += 100;
    // Le dice que estilo va tomar, tomando el valor de ancho y añadiendo px al final
    elemento.style.width= `${ancho}px`
}

cambiarColor = () => {
    let elemento = document.getElementById('subtitulo');
    elemento.className = 'colorNegro';
}

switchColor = () =>{
    let elemento = document.getElementById('subtitulo');
    let color = 'colorAzul';
    // // si el eleemnto contiene color
    // if (elemento.classList.contains(color)){
    //     // entonces remueve el color con un click
    //     elemento.classList.remove(color);
    // }else{
    //     // sino entonces lo añade.
    //     elemento.classList.add(color);
    // }

    // Ahora bien existe un clase que pude hacer todo lo anterior en una sola linea pero lo anterior es bueno para la logica.
    elemento.classList.toggle(color);
}

cambiarTexto = () => {
    let elemento = document.getElementById('subtitulo');
    elemento.innerHTML = 'Este es un nuevo texo';

}

agregarElemento = () => {
    let elemento = document.querySelector('section');
    // El innerHTML cambia todo el texto, luego veremos una manera de no cambiar todo el texto.
    // elemento.innerHTML = "<p>Este es un elemento nuevo</p>";

    // Con esta otra manera no hay la neecesidad de cambiar todo sino que le añadimos texto al ya existente
    // con Ctrl y espacio, nos despliegara donde deseamos añadir el texto, en este ejemplo sera "beforeend"
    elemento.insertAdjacentHTML("beforeend", "<p class='colorAzul'>Este es un nuevo texto</p>")
}