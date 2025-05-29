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

//alternativa para códigos assincronos com o AWAIT SÓ COM A ASYNC FUNCTION, pois dirá que a função é assincrona
async function rodaTudo(){
    const v1 = await tarefa1();
    const v2 = await tarefa2();
    const v3 = await tarefa3();
    console.log(v1,v2,v3);

}

rodaTudo();
