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

//cria um vetor garantido o retorno e guardando-os ao vetor cada um dos returns das functions só funcional ao sistema de promessas
Promise.all([
        tarefa1(),
        tarefa2(),
        tarefa3()
    ]
).then((valor) => {
    console.log(valor)
})
