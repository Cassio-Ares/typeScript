"use strict";
/**
 * Array: conjunto de dados do mesmo tipo
 * Tupla: conjunto de dados de tipos distintos
 * readonly: comando que impede de alterar o array (basicamente diz que o array marcado é só para leitura)
 */
/**
 * array
 */
const numeros = [0, 1, 2, 3];
const palavras = ["string 0", "string 1", "string 2", "string 3"];
// similar ao js podemos usar comando de manipulação de array OBS sempre cuidando o tipo de dado que o array aceita
palavras.push("string 4");
console.log(palavras);
/**
 * readonly
 */
const sóLeitura = ["string 0", "string 1", "string 2", "string 3"];
/**
 * tupla obs na tupla podemos setar os tipos de dados, a ordem
 * e o numero de dados que o array irá receber
 */
var arrTupla = [12, 2, "string"];
/**
 *  Obs só posso manipular o tupla para muda-la usando comando como push
 * var arrTupla: [number, number, string]= [12,2,"string", "string", "string"] isso daria error
 *
 * arrTupla.push("string") dá certo
 * */
//excessão
let minhaTupla;
