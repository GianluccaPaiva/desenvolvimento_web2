function comerFrutas(){
    this.frutas --;//o this por aqui em si só da erro, mas ao inserir no objeto como na linha 10 e 18, ela 
    // ganha um propósito de indicação 
}
const pessoa1 = {
    //variáveis membros/propriedades
    nome : "Maria",
    frutas : 2,
    idade : 12,
    //exemplo de método = operação em cima dos dados
    comer: comerFrutas
};

const pessoa2 = {
    //variáveis membros/propriedades
    nome : "Bungas",
    frutas : 5,
    idade : 12,
    comer: comerFrutas
};

console.log(pessoa1, pessoa2);
pessoa1.comer();
pessoa2.comer();
pessoa2.comer();
console.log(pessoa1, pessoa2);
console.log(pessoa1.comer === pessoa2.comer); //dar true devido ser uma função externa que são atribuidas em 2 objetos,
//mas não interfiriu no fato da função ser externa
