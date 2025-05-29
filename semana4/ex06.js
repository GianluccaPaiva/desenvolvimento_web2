function tarefa2(){
    setTimeout(() => {
        return "tarefa 2";
    });
}

console.log("Tarefa 1");
const valor = tarefa2();
console.log(valor);

console.log("Tarefa 3");

// O codigo assincrono termina antes da execução da tarefa2 pelo timeout, por isso mostra undefined//