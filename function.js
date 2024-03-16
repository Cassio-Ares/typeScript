"use strict";
/**
 * modelo de função padrão a unica diferença dela para o js é que tipamos os parametros
 * @param a number
 * @param b  number
 * @returns  a + b
 */
function soma(a, b) {
    return a + b;
}
console.log(soma(2, 3));
/**
 * agora alem de tipar os parametros tambem tipamos a saida da função.
 * @param a number
 * @param b  number
 * @returns  a * b
 */
function mult(a, b) {
    return a * b;
}
console.log(mult(2, 3));
/**
 * função void: função que não retorna nada
 * @param msg
 */
function msg(msg) {
    console.log(msg);
}
msg('Hello, typeScript');
/**
 * função usando tipo generic (generico) ao colocar <T> dizemos ao typescript que pode vir qualquer
 * tipo de dado mas que ao chegar ele pode tipar a partir do que vier
 *
 * @param array
 */
const arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrLet = ["string1", "string2", "string3"];
function mostrarDados(array) {
    array.forEach(data => {
        console.log(data, typeof data);
    });
}
mostrarDados(arrNum);
mostrarDados(arrLet);
