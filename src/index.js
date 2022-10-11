import cipher from './cipher.js'; //ésta primera linea nos importa desde cipher.js

const textForEncode = document.getElementById("textForEncode");
const encodeButton = document.getElementById("encodeButton");
//const encodeOffset = document.detElemetById("encodeOffset");

encodeButton.addEventListener ("click",function(){
    const inputEncode = textForEncode.value;
    //const inputEncodeOffset = encodeOffset.value; 
    alert(cipher.encode(inputEncode));
});


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
