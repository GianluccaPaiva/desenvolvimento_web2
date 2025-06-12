const pessoa2 = {
    //variáveis membros/propriedades
    nome : "Bungas",
    frutas : 5,
    idade : 12,
    comer: comerFrutas
};
function comerFrutas(){
    this.frutas --;//o this por aqui em si só da erro, mas ao inserir no objeto como na linha 10 e 18, ela 
    // ganha um propósito de indicação 
}
const vazio = {};
const vazio2 = Object.create(pessoa1); //ele continua vazio, mas agora há um protótipo referenciando com a pessoa1
console.log(vazio);

//********************************************************************************************************
//por si só ele não resolveu, usou o protótipo pessoa1 que há todos os atributos que serão tratados
vazio2.frutas = 10;
vazio2.comer();
console.log(vazio2.__proto__ == pessoa1) //retorna true por vazio2 usar como protótipo o pessoa1
//*********************************************************************************************************

console.log(vazio.toString()); //se ele não resolve o objeto ele repassa para 
// um objeto existente no js que resolva (o protótipo)

console.log(vazio.comer()) // dar erro por tentar buscar o protótipo, mas não acha

console.log(Object.getPrototypeOf(vazio2) == pessoa1) //retorna true, pois a função gerada é a mesma do protótipo 
