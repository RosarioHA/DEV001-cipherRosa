const cipher = {   // dentro de este elemento tenemos que implementar los medotos (una función dentro de otra) de cipher.encode(offset,string) y cipher.decode (offset, string)

    encode: function (encodeOffsetValue, textForEncodeValue) {
        if (encodeOffsetValue === "" || textForEncodeValue === "") { throw new TypeError("falta rellenar algunos parámetros")}
        else if (encodeOffsetValue === null || textForEncodeValue === null) { throw new TypeError("cuidado, estás intentando cifrar caracteres no permitidos")}
        else if (encodeOffsetValue === 0 || textForEncodeValue === 0) { throw new TypeError("necesitas elegir un valor diferente a Cero")}

        let encodeResult="";
        const offset = parseInt(encodeOffsetValue); //parsea el valor de encodeOffsetValue para ser siempre number
        for (let i = 0; i < textForEncodeValue.length; i++) { //calcula el largo del string y recorre cada letra con for
            const x = textForEncodeValue.charCodeAt(i);
            if (x >= 65 && x <= 90) { //condicional que determina los minimos y maximos para la variable
                encodeResult += String.fromCharCode(((x - 65 + offset) % 26) + 65); //formula cifrado cesar
            }
            else {
                encodeResult += textForEncodeValue.charAt(i); //permite reconocer espacios dentro del string
            }
        }
        return encodeResult;
        
    },

    decode: function (encodeOffsetValue, textForEncodeValue) {
        if (encodeOffsetValue === "" || textForEncodeValue === "") {throw new TypeError ("falta rellenar algunos parámetros")}
        else if (encodeOffsetValue === null || textForEncodeValue === null) {throw new TypeError ("cuidado, estás intentando cifrar caracteres no permitidos")}
        else if (encodeOffsetValue === 0 || textForEncodeValue === 0) {throw new TypeError ("necesitas elegir un valor diferente a Cero")}

        let encodeResult="";
        const offset = parseInt(encodeOffsetValue);
        for (let i = 0; i < textForEncodeValue.length; i++) { //calcula el largo del string y recorre cada letra con for
            const x = textForEncodeValue.charCodeAt(i);
            if (x >= 65 && x <= 90) { //condicional que determina los minimos y maximos para la variable

                encodeResult += String.fromCharCode(((x - 90 - offset) % 26) + 90); //formula descifrado 
            }
            else {
                encodeResult += textForEncodeValue.charAt(i); //permite reconocer espacios dentro del string
            }
        }
        return encodeResult;
    },

}
export default cipher; //ésta parte nos exporta todo hacia index.js
