"use strict";
// Com any você pode atribuir qualquer tipo e usar como se fosse qualquer tipo. Já unknown você pode atribuir qualquer tipo, 
// mas ao usar ele não é nenhum tipo e você precisará verificar qual é o tipo.
let anyOutraVez;
anyOutraVez = 3;
anyOutraVez = 'teste';
anyOutraVez = true;
let stringTest = 'verificar';
stringTest = anyOutraVez;
let unknownValor;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';
// O tipo 'unknown' não pode ser atribuído ao tipo 'string'.
// para validar é necessário o uso do typeof
// Não é uma prática ruim de usar, já que ele força uma validação de tipos
let stringTest2 = 'agora vai';
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
