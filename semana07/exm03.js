const pessoa1 = {
    //variáveis membros/propriedades
    nome : "Maria",
    frutas : 2,
    idade : 12
};

console.log(pessoa1.idade);
let visitante = pessoa1;//visitante aponta pessoa1
console.log(pessoa1.idade, visitante.idade);
visitante.idade = 15; 
console.log(pessoa1.idade, visitante.idade); // o ideal era 12 e 15, mas deu 15 e 15, pois mexendo na idade do 
// visitante e alterando no pessoa1 dando só apelido para a instancia pessoa1
console.log(pessoa1 == visitante); // da true por visitante apontar a instancia de pessoa1
