function tarefa2(){
    return new Promise((resolve, reject) => { //resolve e reject são duas functions//
        setTimeout(() => {
            resolve("tarefa 2");
        });
    });
}

console.log("Tarefa 1");
tarefa2().then((valor)=>{ // Ele é o resolve, oq ta no then vai para o resolve//
    console.log(valor);
});
console.log("Tarefa 3");
