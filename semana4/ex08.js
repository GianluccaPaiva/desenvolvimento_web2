function tarefa1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("tarefa 1");
        }, 10000);
    });
}

function tarefa2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("tarefa 2");
        }, 1000);
    });
}

function tarefa3(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("tarefa 3");
        }, 100);
    });
}

// Cada tarefa é resolvida em um tempo diferente//

tarefa1().then((valor)=>{ 
    console.log(valor);
});
tarefa2().then((valor)=>{ 
    console.log(valor);
});
tarefa3().then((valor)=>{ 
    console.log(valor);
});
console.log("Acabou!!!!!!!!");

