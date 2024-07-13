const textArea= document.querySelector(".text-area");
const mensaje =  document.querySelector(".mensaje");
const copia = document.querySelector(".btn-copiar");
const h2 = document.querySelector(".mensaje_h2");
const h3 = document.querySelector(".mensaje_h3");
let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage = "none"
    textArea.value = "";
    copia.style.display = "block";
    h2.style.display="none";
    h3.style.display="none";
}
//encriptamos el texto introducido en un área de texto (textArea), mostramos el texto encriptado en otro campo (mensaje), modificamos algunos estilos de elementos en la página (mostrando u ocultando elementos como copia, h2, y h3), y finalmente limpiamos el área de texto original.

function encriptar(stringEncriptada){
stringEncriptada = stringEncriptada.toLowerCase()
for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
}
return stringEncriptada
}
//La función encriptar toma una cadena, la convierte a minúsculas y reemplaza cada vocal en la cadena con su correspondiente código encriptado según la matrizCodigo. Por ejemplo, "hola" se convertiría en "hoberlai".

function botonDesencriptar(){
const textoEncriptado = desencriptar(textArea.value)
mensaje.value = textoEncriptado
textArea.value = "";
}

//Esta función está diseñada para tomar el texto introducido en un área de texto (textArea), desencriptarlo utilizando la función desencriptar, mostrar el texto desencriptado en otro campo (mensaje), y finalmente limpiar el área de texto original.

function desencriptar(stringDesencriptada){
stringDesencriptada = stringDesencriptada.toLowerCase()
for(let i = 0; i < matrizCodigo.length; i++){
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])
    }
}
return stringDesencriptada
}

//La función desencriptar toma una cadena encriptada y reemplaza cada código encriptado con su correspondiente carácter original según la matrizCodigo. Por ejemplo, "hoberlai" se convertiría en "hola".

function copiar(){
mensaje.select();
navigator.clipboard.writeText(mensaje.value)
mensaje.value = "";
}

//La función copiar está diseñada para seleccionar el texto contenido en el elemento mensaje, copiar ese texto al portapapeles del usuario utilizando la API del portapapeles (clipboard API), y luego limpiar el contenido del campo mensaje.