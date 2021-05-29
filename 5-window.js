// Con esta funcion tenemos la informacion de la pagina en la que estamos, con el objeto location
function mostrarUrl() {
    alert(window.location);
};

// Redirect lo que hace que me envia a la URL que yo le asigne.
redirect = () => {
    window.location = 'http://google.com';
};

// Recargar lo que hace es que me recarga la pagina con el metodo reload.
recargar = () =>{
    location.reload()
}

// Con el metodo open lo que hace es que me abre una nueva pestaña y no cierra la mia.
abrir = () => {
    open('http://google.com')
};