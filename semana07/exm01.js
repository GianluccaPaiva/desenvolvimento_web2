// literal de número
const num =123;
//literal de texto
const nome ="Ana";
//objeto literal
const pessoa1 = {
    //variáveis membros/propriedades
    nome : "Maria",
    frutas : 2,
    idade : 12
};

const pessoa2 = {
    //variáveis membros/propriedades
    nome : "Maria",
    frutas : 2,
    idade : 12
};

const pessoa3 = {
    //variáveis membros/propriedades
    nome : "Bombardillo crocodillo",
    frutas : 1,
    idade : 10
};

console.log(num);
console.log(nome);
console.log(pessoa1);
console.log(`${pessoa1.nome} tem ${pessoa1.idade} anos`)
console.log(pessoa1 == pessoa2); //retorna false por ter instanciação(endereço da memória) diferente
console.log(pessoa1.nome == pessoa2.nome); //retorna true, pois compara as atribuições(os valores dos atributos .nome no caso)