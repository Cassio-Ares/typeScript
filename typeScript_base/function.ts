/**
 * modelo de função padrão a unica diferença dela para o js é que tipamos os parametros
 * @param a number
 * @param b  number
 * @returns  a + b
 */
function soma(a: number, b: number) {
  return a + b;
}

console.log(soma(2, 3));

/**
 * agora alem de tipar os parametros tambem tipamos a saida da função.
 * @param a number
 * @param b  number
 * @returns  a * b
 */

function mult(a: number, b: number): number {
  return a * b;
}

console.log(mult(2, 3));

/**
 * função void: função que não retorna nada 
 * @param msg 
 */

function msg(msg: string): void{
    console.log(msg);
}

msg('Hello, typeScript')


/**
 * função usando tipo generic (generico) ao colocar <T> dizemos ao typescript que pode vir qualquer 
 * tipo de dado mas que ao chegar ele pode tipar a partir do que vier
 * 
 * @param array 
 */

const arrNum: number[]= [0,1,2,3,4,5,6,7,8,9]

const arrLet: string[]= ["string1", "string2", "string3"]

function mostrarDados<T>(array: T[]){
    array.forEach(data => {
        console.log(data, typeof data)  
    });
}

mostrarDados(arrNum)

mostrarDados(arrLet)


/**
 * função com narrowing (opção OU ) onde vamos receber um ou outro tipo de 
 * dado e a partir disso vamos ter determinada ação.
 * @param data 
 */

const CPF1: string = "021.354.852-25"

const CPF2: number = 12457885475

function validarData(data: string | number){
    if(typeof data === "string"){
      console.log(`CPF ${data} é do tipo string`)
    }else if(typeof data === "number"){
      console.log(`CPF ${data} é do tipo numero`)
    }
}

validarData(CPF1)
validarData(CPF2)