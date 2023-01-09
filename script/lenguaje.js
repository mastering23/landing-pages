//Cambio de bottom de idioma

var lenguaje;

function lenguaje() {
  var selecionando = document.getElementsByTagName("select")[0].value;

  if (selecionando == "es") {
    window.location.assign("spanishVersion.html");
  } else if (selecionando == "en") {
    window.location.assign("index.html");
  }
}

// Cambio de promo

var imagenes = ['/img/promo1.jpg', '/img/promo2.png', '/img/promo3.jpg'];
var contador = 0;

function cambiarImagen() {
  document.getElementById("promo1").src = imagenes[contador];
  contador = (contador + 1) % imagenes.length;
}

setInterval(cambiarImagen, 3000);
