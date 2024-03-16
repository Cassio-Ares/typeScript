/**Tipos de dados*/
/**
 * Estrutuda de variavel 
 *        let, var ou const "nome da variavel" : tipo do dado = valor;  
 */

//tipos mais comuns

const nome: string = "Hello, World!";
const num: number = 125;
const bool: boolean = false;


console.log(nome, num, bool);

// tipos especiais

const desativaVerificacaoDeTipo : any = "não é recomendo usar any - boas praticas"

const desconhecido: unknown = "é usado quando você não sabe o tipo de dados que está sendo digitado"
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


let nulo: null = null ;
               let myValue: string | null;   //uso mais comum deste tipo de dado 

let indefinido: undefined = undefined;
               let x: number | undefined;//uso mais comum deste tipo de dado 

// criando um tipo

type tipos = string | number;

                  const id: tipos = "akcov";

                  const id2: tipos = 12344;


/**
 * enum: estrutora similar a interface mas ao inves de criar tipos criamos um 
 *       grupo de dado 
 */


enum Tamanho{
    P = "pequena",
    M = "média",
    G = "grande"
}

const Camisa: {nome: string, tamanho:string}={
    nome: "Camisa Polo",
    tamanho: Tamanho.P
}


/**
 * literal type  basicamente vc cria um "tipo" para se usar em um validador por ex:
 */

let liberado : "autenticado" | null = "autenticado" ;

if(liberado === "autenticado"){
    console.log("Bem vindo")
}else{
    console.log("Acesso não liberado")
}