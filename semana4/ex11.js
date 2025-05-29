import http from "node:http";

const PORTA = 8080;
const server = http.createServer(trataRequisicao); //callbeck//
server.listen(PORTA);
console.log(`Servidor rodando em http://localhost:${PORTA}`); //Faz uma requisição sem resposta (cometa)//

function trataRequisicao(req, resp){
    resp.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
    resp.write(JSON.stringify({informação: "teste", min:11, max:20}));
    resp.end();
};

