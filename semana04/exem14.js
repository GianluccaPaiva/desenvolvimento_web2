const END_POINT = "http://localhost:8080";

fetch(END_POINT)
    .then(data => data.json());
    .then(valor =>console.log(valor.min, valor.max));