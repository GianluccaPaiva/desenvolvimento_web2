import http from "node:http";

const PORTA = 8080;
const server= http.createServer(trataRequisição);//cria o server http e indicando a função que deve trabalhar a função callback
server.listen(PORTA);///requisita mas não há o retorno
console.log(`_Servidor rodando na porta http://localhost:${PORTA}`); 

//forma de lidar com a requisição
function trataRequisição(req, resp){
    resp.write("Olá mundo!");
    resp.end();
}