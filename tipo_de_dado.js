"use strict";
/**Tipos de dados*/
/**
 * Estrutuda de variavel
 *        let, var ou const "nome da variavel" : tipo do dado = valor;
 */
//tipos mais comuns
const nome = "Hello, World!";
const num = 125;
const bool = false;
console.log(nome, num, bool);
// tipos especiais
const desativaVerificacaoDeTipo = "não é recomendo usar any - boas praticas";
const desconhecido = "é usado quando você não sabe o tipo de dados que está sendo digitado";
/**
 * o tipo unknow pode ser usado junto a uma verificação pois se não sebemos que tipo de dados
 * iremos receber mas sabemos o que queremos podemos trabalhar com os dados a partir de uma verificação
 * EX:
 * if (typeof desconhecido === "string") {
    let longitud = desconhecido.length; // OK
    console.log("Tipo de dado String, OK");
} else {
    console.log("Tipo desconhecido");
}
 */
let nulo = null;
let myValue; //uso mais comum deste tipo de dado 
let indefinido = undefined;
let x; //uso mais comum deste tipo de dado 
const id = "akcov";
const id2 = 12344;
/**
 * enum: estrutora similar a interface mas ao inves de criar tipos criamos um
 *       grupo de dado
 */
var Tamanho;
(function (Tamanho) {
    Tamanho["P"] = "pequena";
    Tamanho["M"] = "m\u00E9dia";
    Tamanho["G"] = "grande";
})(Tamanho || (Tamanho = {}));
const Camisa = {
    nome: "Camisa Polo",
    tamanho: Tamanho.P
};
/**
 * literal type  basicamente vc cria um "tipo" para se usar em um validador por ex:
 */
let liberado = "autenticado";
if (liberado === "autenticado") {
    console.log("Bem vindo");
}
else {
    console.log("Acesso não liberado");
}
