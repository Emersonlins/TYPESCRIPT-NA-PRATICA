"use strict";
// Criando uma "proteção" a função. Define-se os valores de parametro e o tipo de saída 
// da função. Exemplo abaixo: Returns a string representation of an object.
// numero1 + numero2.toString
// @param radix — Specifies a radix for converting numeric values to strings. This value is only used for numbers.
function somarValoresnumericos(numero1, numero2) {
    return numero1 + numero2;
}
console.log(somarValoresnumericos(2, 20));
// void é usado sempre que uma função não retorna nada explicitamente (geralmente significa que ela retorna undefined implicitamente)
function printValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
// Uma função callback é uma função passada a outra função como argumento, 
//que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.
function somarValoresnumericosETratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorElemesmo(numero) {
    return numero / numero;
}
console.log(somarValoresnumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresnumericosETratar(1, 3, dividirPorElemesmo));
