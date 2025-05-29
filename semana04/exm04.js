console.log("tarefa 1");

setTimeout(tarefa2(),0);

function tarefa2(){
    console.log("tarefa 2: Início");
        for(let i =0;i<1e10;i++){};
        console.log("tarefa 2: Fim");
}
console.log("tarefa 3");