// Saludo Javascript 
function mostrarSaludo() {

    fecha = new Date();
    hora = fecha.getHours();

    if (hora >= 0 && hora < 12) {
        texto = "Buenos DÃ­as";
        imagen = "https://nubecolectiva.com/img/dia.png";
    }

    if (hora >= 12 && hora < 18) {
        texto = "Buenas Tardes";
        imagen = "https://nubecolectiva.com/img/tarde.png";
    }

    if (hora >= 18 && hora < 24) {
        texto = "Buenas Noches";
        imagen = "https://nubecolectiva.com/img/noche.png";
    }

    document.images["tiempo"].src = imagen;

    document.getElementById('txtsaludo').innerHTML = texto;
}