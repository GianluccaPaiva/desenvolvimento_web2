//códigos com a resolução do assincrono usando a promessa sempre tem que ter o resolve e o reject
function tarefa1(){
    return new Promise((resolve,reject) =>{
            setTimeout(() =>{
                resolve("tarefa 1");
            });
        });
}

function tarefa2(){
    return new Promise((resolve,reject) =>{
            setTimeout(() =>{
                resolve("tarefa 2");
            }, 1000);
        });
}

function tarefa3(){
    return new Promise((resolve,reject) =>{
            setTimeout(() =>{
                resolve("tarefa 3");
            }, 500);
        });
}


//no caso de resolve, o que está no then vai passar para o resolve
tarefa1().then((valor) => {
    console.log(valor)
});

tarefa2().then((valor) => {
    console.log(valor)
});

tarefa3().then((valor) => {
    console.log(valor)
});