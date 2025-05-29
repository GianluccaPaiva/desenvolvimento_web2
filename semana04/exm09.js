//código com a resolução do assincrono usando a promessa sempre tem que ter o resolve e o reject
function tarefa2(){
    return new Promise((resolve,reject) =>{
            setTimeout(() =>{
                resolve("tarefa 2");
            });
        });
}
console.log("Tarefa1");

//no caso de resolve, o que está no then vai passar para o resolve
tarefa2().then((valor) => {
    console.log(valor)
});
console.log(valor);

console.log("tarefa 3");