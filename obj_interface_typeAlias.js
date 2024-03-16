"use strict";
/**
 * Objeto: "nome da variavel": {obj com chave e tipo de dado}= {obj em si}
 *
 * type alias: vc cria algo como uma class com tipos personalizados.
 *
 * type User={nome: string, email: string, idade: number, cadastro_completo: boolean}
 *
 *              const usuario: user = {
 *                         nome:"usuario",
 *                         email:"usuario@gmail.com",
 *                         idade: 87,
 *                         cadastro_completo:true
 *                        }
 *
 * interface: mesma coisa que o type alias só muda a sintase tira o =
 *
 * interface User{nome: string, email: string, idade: number, cadastro_completo: boolean}
 *
 */
//objeto
const user = {
    nome: "usuario",
    email: "usuario@gmail.com",
    idade: 87,
    cadastro_completo: true,
};
const overLord = {
    nome: "overLord",
    tipo: "isekai",
    ano: 2010
};
const Dragon_Ball_Z = {
    nome: "Dragon Ball Z",
    tipo: "shounen",
    ano: 1989
};
