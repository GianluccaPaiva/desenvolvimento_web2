//função construtora que fica como responsável criar objetos
function Pessoa(nome, idade, frutas)
{
    this.nome = nome;
    this.idade = idade;
    this.frutas = frutas;
}

function comerFrutas(){
    this.frutas --;//o this por aqui em si só da erro, mas ao inserir no objeto como na linha 10 e 18, ela 
    // ganha um propósito de indicação 
}

//mesmo que o, creat prototype porém de outra sintaxe
Pessoa.prototype.comer = comerFrutas;

const pessoa1 = new Pessoa("Maria", 12, 5); //chama com new e a função construtora com seus atributos.
