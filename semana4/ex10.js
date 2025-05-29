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

async function rodaTudo(){
    const v1 = await tarefa1();
    const v2 = await tarefa2();
    const v3 = await tarefa3();
    console.log(v1, v2, v3);
}

rodaTudo();

// AWAIT só pode ser usado em f(X) se ela for asyns(ASSINCRONA) => N TRAVA A LINHA//