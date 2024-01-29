function encriptar() {
  const texto = document.getElementById("texto").value;
  const tituloMensaje = document.getElementById("titulo-mensaje");
  const parrafo = document.getElementById("parrafo");
  const muneco = document.getElementById("muneco");
  const mensajeEncriptado = document.getElementById("mensaje-encriptado");

  const textoCifrado = texto
      .replace(/e/gi, 'enter')
      .replace(/i/gi, 'imes')
      .replace(/a/gi, 'ai')
      .replace(/o/gi, 'ober');

  if (texto.length !== 0) {
      mensajeEncriptado.style.visibility = "visible"; // Mostrar la sección encriptado
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      mensajeEncriptado.querySelector("#parrafo").textContent = textoCifrado; // Actualizar el texto encriptado
  } else {
      mensajeEncriptado.style.visibility = "hidden"; // Ocultar la sección encriptado
      muneco.src = "./img/(1)Wall.E.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Oooopsss!", "Debes ingresar un texto", "warning");
  }
}

function desencriptar() {
  const texto = document.getElementById("texto").value;
  const tituloMensaje = document.getElementById("titulo-mensaje");
  const parrafo = document.getElementById("parrafo");
  const muneco = document.getElementById("muneco");
  const mensajeEncriptado = document.getElementById("mensaje-encriptado");

  const textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");

  if (texto.length !== 0) {
      mensajeEncriptado.style.visibility = "visible"; // Mostrar la sección encriptado
      muneco.src = "./img/muñeco.png";
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
      mensajeEncriptado.querySelector("#parrafo").textContent = textoCifrado; // Actualizar el texto desencriptado
  } else {
      mensajeEncriptado.style.visibility = "hidden"; // Ocultar la sección encriptado
      muneco.src = "./img/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function copiarResultado() {
    const resultado = document.getElementById("mensaje-encriptado").querySelector("#parrafo");

    const textarea = document.createElement("textarea");
    textarea.value = resultado.textContent;

    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");

    document.body.removeChild(textarea);

    swal("Texto copiado al portapapeles");
}