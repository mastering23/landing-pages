var lenguaje;

function lenguaje() {
  var selecionando = document.getElementsByTagName("select")[0].value;

  if (selecionando == "es") {
    window.location.assign("spanishVersion.html");
  } else if (selecionando == "en") {
    window.location.assign("index.html");
  }
}
