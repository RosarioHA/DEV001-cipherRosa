import cipher from './cipher.js'; //ésta primera linea nos importa desde cipher.js
const textForEncode = document.getElementById("textForEncode");
const encodeButton = document.getElementById("encodeButton");
const encodeOffset = document.detElemetById("encodeOffset");

//transformar todo el string en mayúsculas
textForEncode.addEventListener("keyup", function (){
    this.value = this.value.toUpperCase ();
}, true);




encodeButton.addEventListener ("click",function(){ //al hacer click al botón
    const textForEncodeValue = textForEncode.value; //traer el input de texto reutilizando la funcion textForEncode
    const encodeOffsetValue = encodeOffset.value; // traer el numero de offset de desplazamiento, se diferencia al ser los valores del input
    //const letras = parseInt(encodeOffset); // transforma de string a number el argumento
    document.getElementById("inputEncode").value = cipher.encode(encodeOffsetValue, textForEncodeValue);



    //const inputEncode = textForEncode.value;
    //const inputEncodeOffset = encodeOffset.value;

    //alert(cipher.encode(inputEncode));
}, true);


// const inputEncode = document.getElementById("textForEncode");
// const encodeButton = document.getElementById("encodeButton");

// encodeButton.addEventListener ("click", function() {
//     const inputEncode = document.getElementById("textForEncode")


//     const encodeText = inputEncode.value;
//     console.log(encodeText);
//     const encodedResult = cipher.encode(inputEncode);
//     console.log(inputEncode);
//     //document.getElementById("result").innerHTML = encodedResult;
//     alert(cipher.encode (encodedResult));
//     //cipher.encode(encodeText);
// });



//console.log(cipher);
