console.log("Tarefa 1");
// Está função n nomeada n pode ser chamada, é semelhante a tarefa2 ex03.js//
setTimeout(() => {
    console.log("Tarefa 2: Inicio");
    for(let i=0; i< 1e10; i++) {}
    console.log("Tarefa 2: Fim");
});
setTimeout(tarefa3);
console.log("Liberou!!")


function tarefa3(){
    console.log("Tarefa 3: Inicio");
    for(let i=0; i< 1e10; i++) {}
    console.log("Tarefa 3: Fim");
}