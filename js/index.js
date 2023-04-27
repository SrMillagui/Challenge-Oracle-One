
const d = document;
const textoInput = d.querySelector(".texto");
const encriptarButton = d.querySelector(".encriptar");
const desencriptarButton = d.querySelector(".desencriptar");
const encriptadoOutput = d.querySelector(".texto-encriptado");
const copiarButton = d.querySelector(".copiar");
const textoEncriptadoInput = d.querySelector(".texto-botonCopiar");
const imagenTexto = d.querySelector(".imagen-texto");
const btnCopiar = d.querySelector(".btn-copiar");

copiarButton.style.display = "none"
//Solo minusculas
textoInput.addEventListener("input", function() {
  const regex = /[^a-z\s]/g;
  this.value = this.value.toLowerCase().replace(regex, '');
});

//Encriptar
encriptarButton.addEventListener('click', () => {
  let resultado = textoInput.value.replace(/e/g, "enter")
  .replace(/i/g, "imes")
  .replace(/a/g, "ai")
  .replace(/o/g, "ober")
  .replace(/u/g, "ufat")
  console.log(resultado)
  encriptadoOutput.value = resultado;
  textoEncriptadoInput.style.display = "flex";
  imagenTexto.style.display = "none";
  copiarButton.style.display = "flex"
});

//Desencriptar
desencriptarButton.addEventListener('click', () => {
  let resultado = textoInput.value.replace(/enter/g, "e")
  .replace(/imes/g, "i")
  .replace(/ai/g, "a")
  .replace(/ober/g, "o")
  .replace(/ufat/g, "u")
  console.log(resultado)
  encriptadoOutput.value = resultado
  textoInput.value = "";
});

//Copiar
copiarButton.addEventListener('click', () => {
encriptadoOutput.select();
d.execCommand("copy");
textoInput.value = "";
});

btnCopiar.addEventListener('click', () => {
  encriptadoOutput.select();
  d.execCommand("copy");
  textoInput.value = "";
  });