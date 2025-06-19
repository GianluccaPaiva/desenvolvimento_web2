//função construtora que fica como responsável criar objetos com sintaxe melhor e podendo atribuir funções já
//logo direto, o class 
//interfasse de modulação de dados
class Pessoa {
    //esses dois abaixo não passam pelo construtor
    #frutas = 0; //variável privativa
    #fome = 10; //uma variável privativa não deixa alterá-la de forma externa impedindo objeto.fome para manipular
    // o objeto só podendo acessar por método.
    constructor(nome, idade, frutas = 0) {//frutas = 0 acarreta na lógica de se não for atribuido valor de 
    // frutas ele recebe como default 0
        this.nome = nome;
        this.idade = idade;
        this.#frutas = frutas;
    }
    //método de acesso para leitura da variável privada
    get fome(){
        return this.#fome;
    }
    //método de acesso para leitura da variável privada
    get frutas(){
        return this.#frutas;
    }
    //método de acesso para manipular variável privada
    set frutas(quantidade){
        if(quantidade<=0){
            return;
        }
        this.#frutas = quantidade;
    }
    comer(){
        if (this.frutas <=0){ //mesma lógica da linha 23
            return;
        }
        this.frutas --;//o this por aqui em si só da erro, mas ao inserir no objeto como na linha 10 e 18, ela 
    // ganha um propósito de indicação 
        this.#fome --;
    }
    //escopo de saida de texto do objeto com seus atributos
    toString(){
        return `${this.nome} tem ${this.frutas} (Fome: ${this.fome})`;
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

//classe filha, ou seja recebe os atributos do objeto mãe com a herança
class PessoaGulosa extends Pessoa{
    comer(){
        super.comer();//acessa a classe mãe no método comer()
        console.log(`${this.nome} ainda com fome!`);
        super.comer();
    }

}


//com esse new garante que são instâncias diferentes dando false na comparação entre maria === joao
const maria = new Pessoa("Maria", 12, 3); //chama com new e a função construtora com seus atributos com 
const joao = new PessoaGulosa("Jão", 12, 6); //chama com new e a função construtora com seus atributos com 
// falta de um atributo.
console.log(maria.toString());
//maria.#fome = 0; e nem maria.fome=0 não funciona
maria.comer();
console.log(maria.toString());
