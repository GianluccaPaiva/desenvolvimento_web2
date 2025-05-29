console.log("tarefa 1");

//functions armazenadas em uma const mas mantém a lógica do exm05.js//
const tarefa = ()=>{
    console.log("tarefa 2: Início");
    for(let i =0;i<1e10;i++){};
    console.log("tarefa 2: Fim");
}

setTimeout(tarefa,0);


setTimeout(() =>{
    console.log("tarefa 3: Início");
    for(let i =0;i<1e10;i++){};
    console.log("tarefa 3: Fim");
},0);
