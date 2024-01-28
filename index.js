function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    let textoCifrado = texto
        .replace(/e/gi, 'enter')
        .replace(/i/gi, 'imes')
        .replace(/a/gi, 'ai')
        .replace(/o/gi, 'ober');

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muneco.src = "./img/encriptado.png";
    } else {
        muneco.src = "./img/(1)Wall.E.png";
        tituloMensaje = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
        alert("Debes ingresar algún texto");
    }
}

