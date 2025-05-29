const END_POINT = "http://localhost:8080";

async function buscaDados() {
    const data = await fetch(END_POINT);
    const json = await data.json();
    console.log(json);
}

buscaDados();