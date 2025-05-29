//código assincrono, pois não espera terminar o timeout para retornar indo direto até terminar a execução do código
function tarefa2(){
    setTimeout(() =>{
        return "tarefa 2";
    });
}
console.log("Tarefa1");

const valor = tarefa2();
console.log(valor);

console.log("tarefa 3");