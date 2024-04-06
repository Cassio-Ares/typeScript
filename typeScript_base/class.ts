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


class Protagonista{
    nome: string;
    anime: string;
    tipo_de_poder: string;
         constructor(nome_: string,anime_: string, tipo_de_poder_: string){
                this.nome = nome_;
                this.anime = anime_;
                this.tipo_de_poder = tipo_de_poder_;
         }
    
     chamarProta():void{
        console.log(`oi eu sou ${this.nome}.`)
     }

}


const DBZ = new Protagonista("Goku(Kakaroto)", "Dragon Ball", "Ki")
console.log(DBZ)

const chamar = DBZ.chamarProta()
console.log(chamar)

//Metodos de acesso:

/**
 * Public pode ser acessado de qualquer lugar
 */
class PessoaPublic {
    public nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

let pessoaP = new PessoaPublic("João");
console.log(pessoaP.nome); // Saída: João


/**
 * Privete só pode ser acessado dentro da class que foi declarado
 */

class Pessoa {
    private idade: number;

    constructor(idade: number) {
        this.idade = idade;
    }

    mostrarIdade() {
        console.log("Idade:", this.idade);
    }
}

let pessoa = new Pessoa(40);
pessoa.mostrarIdade(); // Saída: Idade: 30
//console.log(pessoa.idade); // ERRO: 'idade' é privado e só pode ser acessado dentro da classe 'Pessoa'


/**
 * Protected: os dados só podem ser acessados dentro da propria class ou nas classes filhas (subclasses)
 */

class Animal {
    protected tipo: string;

    constructor(tipo: string) {
        this.tipo = tipo;
    }
}

class Cachorro extends Animal {
    constructor() {
        super("Cachorro");
    }

    mostrarTipo() {
        console.log("Tipo:", this.tipo);
    }
}

let cachorro = new Cachorro();
cachorro.mostrarTipo(); // Saída: Tipo: Cachorro
//console.log(cachorro.tipo); // ERRO: 'tipo' é protegido e só pode ser acessado dentro da classe 'Animal' e suas subclasses
