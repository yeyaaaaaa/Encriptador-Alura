const textoInput = document.getElementById("entrada");
const encriptarButton = document.getElementById("encriptar");
const desencriptarButton = document.getElementById("desencriptar");
const resultadoDiv = document.querySelector(".subcuadrado .texto");
const muñecoImg = document.querySelector(".muñeco");
const texto = document.querySelector(".titulo");
const copiarButton = document.getElementById("copiar");


encriptarButton.addEventListener("click", () => {
  const texto = textoInput.value.trim();
  const encriptado = encriptarTexto(texto);
  mostrarResultado(encriptado);
  eliminarInstrucciones();
});

desencriptarButton.addEventListener("click", () => {
  const texto = textoInput.value.trim();
  const desencriptado = desencriptarTexto(texto);
  mostrarResultado(desencriptado);
  eliminarInstrucciones();
});

copiarButton.addEventListener("click", () => {
    const texto = resultadoDiv.textContent;
    navigator.clipboard.writeText(texto).then(() => {
      console.log("Texto copiado al portapapeles");
    });
  });

function encriptarTexto(texto) {
  const llaves = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
  };

  return texto.replace(/[eiaou]/g, match => llaves[match]);
}

function desencriptarTexto(texto) {
  const llaves = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u"
  };

  return texto.replace(/(enter|imes|ai|ober|ufat)/g, match => llaves[match]);
}

function mostrarResultado(resultado) {
  resultadoDiv.textContent = resultado;
  resultadoDiv.style.color = "#333";
  resultadoDiv.style.fontSize = "18px";
  resultadoDiv.style.textAlign = "left"
}

function eliminarInstrucciones() {
    muñecoImg.style.display = "none";
    texto.style.display = "none";
}