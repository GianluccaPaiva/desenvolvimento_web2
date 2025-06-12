const pessoa1 = {
    //variáveis membros/propriedades
    nome : "Maria",
    frutas : 2,
    idade : 12
};

console.log(pessoa1.idade);
let idadeCopia = pessoa1.idade;
console.log(pessoa1.idade, idadeCopia);
idadeCopia = 15; //da erro caso for const, pois const não pode ser reatribuido
console.log(pessoa1.idade, idadeCopia);
