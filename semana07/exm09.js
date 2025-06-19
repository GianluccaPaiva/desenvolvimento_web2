//função construtora que fica como responsável criar objetos com sintaxe melhor e podendo atribuir funções já
//logo direto, o class 
//interfasse de modulação de dados
class Pessoa {
    constructor(nome, idade, frutas) {
        this.nome = nome;
        this.idade = idade;
        this.frutas = frutas;
    }
    comer(){
    this.frutas --;//o this por aqui em si só da erro, mas ao inserir no objeto como na linha 10 e 18, ela 
    // ganha um propósito de indicação 
    }
    doar(receptor){
        if(this.frutas <= 0){ // com o if <=0 deixa o código mais limpo em trabalhar colocando apenas a excessão 
        // na condição
            return;
        } 
        //apenas com frutas do objeto chamado for > 0
        this.frutas--; //é o objeto que doará é dessa instânciação
        receptor.frutas++; //varia com o receptor
    }
}


//com esse new garante que são instâncias diferentes dando false na comparação entre maria === joao
//todos os atributos aqui devem ser atribuidos pelo usuário dando erro se não atribuir.
const maria = new Pessoa("Maria", 12, 1); //chama com new e a função construtora com seus atributos.
const joao = new Pessoa("João", 10, 2); //chama com new e a função construtora com seus atributos.
console.log(maria, joao);
joao.doar(maria);//o objeto joão será o doador devido ao this e a maria sendo um receptor externo que não é do 
// objeto precisando ser uma variável a ser recebida na chamada no exemplo a maria(forma abstrata)
console.log(maria,joao);
console.log(maria, joao);