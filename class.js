"use strict";
/**
 * class nome_da_class{
 *      key1: tipo de dado;
 *      key2: tipo de dado;
 *      key3: tipo de dado
 *                  constructor(key1: tipo de dado, key2: tipo de dado, key3: tipo de dado){
 *                                 this.key1 = key1;
 *                                 this.key2= key2;
 *                                  this.key3= key3
 *                   }
 *
 *           caso tenha uma função ele irá aqui abaixo do constructor
 *     }
 *
 *
 *             para usar a class
 *               const nome_de_variavel = new nome_da_class(valores)
 *
 */
class Protagonista {
    constructor(nome_, anime_, tipo_de_poder_) {
        this.nome = nome_;
        this.anime = anime_;
        this.tipo_de_poder = tipo_de_poder_;
    }
    chamarProta() {
        console.log(`oi eu sou ${this.nome}.`);
    }
}
const DBZ = new Protagonista("Goku(Kakaroto)", "Dragon Ball", "Ki");
console.log(DBZ);
const chamar = DBZ.chamarProta();
console.log(chamar);