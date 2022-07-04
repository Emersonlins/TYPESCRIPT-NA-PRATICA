"use strict";
let valorAny;
valorAny = 3;
valorAny = 'Hello';
valorAny = true;
let valorString = 'teste';
valorString = valorAny;
let valorString2 = 'superteste';
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
somarString('Hello', ', Como vai?');
