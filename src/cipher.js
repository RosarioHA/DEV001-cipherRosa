const cipher = {   // dentro de este elemento tenemos que implementar los medotos (una función dentro de otra) de cipher.encode(offset,string) y cipher.decode (offset, string)
    function encode (encodeOffset, textForEncode){ //aqui dentro declaro las variables
        const saludo = "hola";
        const greeting = saludo + " " + textForEncode;
        return greeting;
        //console.log("aqui están", encodeOffset, textForEncode);
    };




    function decode (decodeOffset, textForDecode){ //aqui dentro declaro las variables
        console.log (decodeOffset, textForDecode);
    };

};


export default cipher; //ésta parte nos exporta todo hacia index.js
