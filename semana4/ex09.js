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

Promise.all([
    tarefa1(),
    tarefa2(),
    tarefa3()]
).then((valor) => {
    console.log(valor);
});

// Cria um vet garantindo o retorno e guarda os retornos no vetor//