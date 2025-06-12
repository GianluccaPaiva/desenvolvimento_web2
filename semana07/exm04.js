const mensagem = function (){
    console.log("Olá mundo!");
}
//ao atribuir uma function na variável ou const ela não precisa ser chamada por nome da function
// (como no caso function olaMundo não precisa ter olaMundo) deixando como responsabilidade de chamar 
// a própria variável
mensagem();

const pessoa1 = {
    //variáveis membros/propriedades
    nome : "Maria",
    frutas : 2,
    idade : 12,
    //exemplo de método = operação em cima dos dados
    comer: function(){
        //o this, dentro da função e a função dentro do objeto, referencia o objeto
        this.frutas --;
    }
};

const pessoa2 = {
    //variáveis membros/propriedades
    nome : "Bungas",
    frutas : 2,
    idade : 12,
    //exemplo de método = operação em cima dos dados
    comer: function(){
        //o this, dentro da função e a função dentro do objeto, referencia o objeto
        this.frutas --;
    }
};

console.log(pessoa1, pessoa2);
pessoa1.comer();
pessoa2.comer();
pessoa2.comer();
console.log(pessoa1, pessoa2);
console.log(pessoa1.comer === pessoa2.comer); //dar falso devido ser funções em instanciações diferentes
