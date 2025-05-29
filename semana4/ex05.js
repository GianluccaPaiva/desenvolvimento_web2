import http from "node:http";

const PORTA = 8080;
const server = http.createServer(trataRequisicao); //callbeck//
server.listen(PORTA);
console.log(`Servidor rodando em http://localhost:${PORTA}`); //Faz uma requisição sem resposta (cometa)//

function trataRequisicao(req, resp){
    resp.write("Ola cara");
    resp.end();
};

