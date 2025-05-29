//mesma lógica do exm14.js, mas em função async
const END_POINT = "http://localhost:8080";

async function buscaValores (){
    const data = await fetch(END_POINT);
    const valor = await data.json();
    console.log(valor.min,valor.max);
}
buscaValores();