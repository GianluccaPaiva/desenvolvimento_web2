console.log("Tarefa 1");
setTimeout(tarefa2);
console.log("Liberou!!")

function tarefa2(){
    console.log("Tarefa 2: Inicio");
    for(let i=0; i< 1e10; i++) {}
    console.log("Tarefa 2: Fim");
    console.log("Tarefa 3");
}

