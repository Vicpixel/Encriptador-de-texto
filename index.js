let aumentoTamano = false; // Variable para rastrear si el tamaño ya se ha aumentado

function encriptar() {
    const texto = document.getElementById("texto").value;
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const parrafo = document.getElementById("parrafo");
    const muneco = document.getElementById("muneco");
    const mensajeEncriptado = document.getElementById("mensaje-encriptado");
    const btnCopiar = document.querySelector(".btn-copiar"); // Selecciona el botón de copiar

    const textoCifrado = texto
        .replace(/e/gi, 'enter')
        .replace(/i/gi, 'imes')
        .replace(/a/gi, 'ai')
        .replace(/o/gi, 'ober');

    if (texto.length !== 0) {
        // Mueve el mensaje-encriptado a la parte superior
        mensajeEncriptado.style.top = "0";
        mensajeEncriptado.classList.add('show'); // Agrega la clase de animación
        muneco.style.display = "none";

        if (!aumentoTamano) {
            // Incrementa el tamaño de la fuente del título y del párrafo una sola vez
            tituloMensaje.style.fontSize = (parseInt(getComputedStyle(tituloMensaje).fontSize) + 5) + "px";
            parrafo.style.fontSize = (parseInt(getComputedStyle(parrafo).fontSize) + 5) + "px";
            aumentoTamano = true; // Marca que el tamaño ya se ha aumentado
        }

        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        mensajeEncriptado.querySelector("#parrafo").textContent = textoCifrado;
        btnCopiar.style.display = "block";
    } else {
        // Restaura la posición original y el tamaño de la fuente
        mensajeEncriptado.style.top = "75%";
        mensajeEncriptado.style.visibility = "hidden";
        muneco.style.display = "block";
        tituloMensaje.style.fontSize = ""; // Restaura el tamaño de la fuente original
        parrafo.style.fontSize = ""; // Restaura el tamaño de la fuente original
        aumentoTamano = false; // Reinicia la variable para permitir el aumento en futuras operaciones
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Oooopsss!", "Debes ingresar un texto", "warning");
        btnCopiar.style.display = "none";
    }
}

function desencriptar() {
    const texto = document.getElementById("texto").value;
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const parrafo = document.getElementById("parrafo");
    const muneco = document.getElementById("muneco");
    const mensajeEncriptado = document.getElementById("mensaje-encriptado");
    const btnCopiar = document.querySelector(".btn-copiar"); // Selecciona el botón de copiar

    const textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length !== 0) {
        // Mueve el mensaje-encriptado a la parte superior
        mensajeEncriptado.style.top = "0";
        mensajeEncriptado.classList.add('show'); // Agrega la clase de animación
        muneco.style.display = "none";

        if (!aumentoTamano) {
            // Incrementa el tamaño de la fuente del título y del párrafo una sola vez
            tituloMensaje.style.fontSize = (parseInt(getComputedStyle(tituloMensaje).fontSize) + 5) + "px";
            parrafo.style.fontSize = (parseInt(getComputedStyle(parrafo).fontSize) + 5) + "px";
            aumentoTamano = true; // Marca que el tamaño ya se ha aumentado
        }

        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        mensajeEncriptado.querySelector("#parrafo").textContent = textoCifrado;
        btnCopiar.style.display = "block";
    } else {
        // Restaura la posición original y el tamaño de la fuente
        mensajeEncriptado.style.top = "75%";
        mensajeEncriptado.style.visibility = "hidden";
        muneco.style.display = "block";
        tituloMensaje.style.fontSize = ""; // Restaura el tamaño de la fuente original
        parrafo.style.fontSize = ""; // Restaura el tamaño de la fuente original
        aumentoTamano = false; // Reinicia la variable para permitir el aumento en futuras operaciones
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
        btnCopiar.style.display = "none";
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

    alert("Texto copiado al portapapeles");
}
