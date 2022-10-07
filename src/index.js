import cipher from './cipher.js'; //ésta primera linea nos importa desde cipher.js

//const inputEncode = document.getElementById("textForEncode");
const encodeButton = document.getElementById("encodeButton");

encodeButton.addEventListener ("click", function() {
    const inputEncode = document.getElementById("textForEncode")


    //const encodeText = inputEncode.value;
    const encodedResult = cipher.encode(encodeText);
    console.log(encodeText);
    //document.getElementById("result").innerHTML = encodedResult;
    alert(cipher.encode (encodedResult));
    //cipher.encode(encodeText);
});



console.log(cipher);
