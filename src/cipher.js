const cipher = {   // dentro de este elemento tenemos que implementar los medotos (una función dentro de otra) de cipher.encode(offset,string) y cipher.decode (offset, string)
    encode: function (encodeOffset, textForEncode){ 
        // const encodeResult = "";
        // if (encodeOffset === "" || textForEncode === "") throw new TypeError ("falta rellenar algunos parámetros")
        // if (encodeOffset === null || textForEncode === null) throw new TypeError ("cuidado, estás intentando cifrar caracteres no permitidos")
        // if (encodeOffset === 0 || textForEncode === 0) throw new TypeError ("necesitas elegir un valor diferente a Cero")
        let encodeResult;
        const letras = parseInt(encodeOffset);
     for (let i=0; i< textForEncode.lenght; i++) { //calcula el largo del string y recorre cada letra con for
        const x = textForEncode.charCodeAt(i);
        if (x >= 65 && x <= 90) { //condicional que determina los minimos y maximos para la variable

            encodeResult += textForEncode.fromCharCode (((x - 65 + letras) % 26) + 65); //formula cifrado cesar
        }
        else {
             encodeResult += textForEncode.charAt (i); //permite reconocer espacios dentro del string
         }
     }   
     return encodeResult;

    },


    decode: function (decodeOffset, textForDecode){
       
    }
}
export default cipher; //ésta parte nos exporta todo hacia index.js
