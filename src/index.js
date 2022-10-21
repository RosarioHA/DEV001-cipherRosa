import cipher from './cipher.js'; //ésta primera linea nos importa desde cipher.js

const textForEncode = document.getElementById("textForEncode");
const encodeButton = document.getElementById("encodeButton");
const encodeOffset = document.getElementById("encodeOffset");
const decodeButton = document.getElementById("decodeButton");

// //transformar todo el string en mayúsculas
 textForEncode.addEventListener("keyup", function (){
     this.value = this.value.toUpperCase ();
});


encodeButton.addEventListener ("click",function(){ //al hacer click al botón
    const textForEncodeValue = textForEncode.value; //traer el input de texto reutilizando la funcion textForEncode
    const encodeOffsetValue = encodeOffset.value; // traer el numero de offset de desplazamiento, se diferencia de getElementById por ser los valores del input
    //console.log("esta es la textForEncodeValue " + textForEncodeValue)
    document.getElementById("encodeResult").innerHTML = cipher.encode(encodeOffsetValue, textForEncodeValue); // envía encodeResult a .html
});

decodeButton.addEventListener ("click",function(){ //al hacer click al botón
    const textForEncodeValue = textForEncode.value; //traer el input de texto reutilizando la funcion textForEncode
    const encodeOffsetValue = encodeOffset.value; // traer el numero de offset de desplazamiento, se diferencia de getElementById por ser los valores del input
    const offsetNumber = parseInt(encodeOffsetValue); // transforma de string a number el input del offset
    document.getElementById("encodeResult").innerHTML = cipher.decode(offsetNumber, textForEncodeValue); // envía encodeResult a .html
});

console.log(cipher);
