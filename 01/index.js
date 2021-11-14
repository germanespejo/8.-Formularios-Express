/* 1- Crear una aplicación de servidor que tenga una lista de animales (un array con objetos) que
tendrán nombre, edad y tipo de animal. Cuando vayamos a la raíz (ruta '/’) el servidor devolverá
el HTML de la lista de animales.*/

const express = require("express");
let animals = require("./app.js");
const servidor = express();

servidor.listen(3002);
servidor.use(express.static('public'));

servidor.get("/animals", function (request, response) {
    let html = "";
    for (let i = 0; i < animals.length; i++) {
        html += (`<li>Name: ${animals[i].name}, Age: ${animals[i].age}, Type: ${animals[i].type}</li>`)
    }
    response.send(html);
})

/*2- Crear una segunda ruta ('/sumar-animal') que recibirá por query el nombre, el tipo y la edad
de un animal. Al recibirlo, se creará un objeto de animal con su información y se añadirá a la
lista de animales en el servidor.*/

servidor.get("/sumar-animal", function (request, response) {
    let nameVar = request.query.id;
    let ageVar = request.query.id;
    let typeVar = request.query.id;

    let respuesta = {
        name: nameVar,
        age: ageVar,
        type: typeVar,
    }
    animals.push(respuesta);

    let html = "";
    for (let i = 0; i < animals.length; i++) {
        html += (`<li>Name: ${animals[i].name}, Age: ${animals[i].age}, Type: ${animals[i].type}</li>`)
    }
    response.send(html);
})

/*3- Si no habéis creado un formulario para enviar la información a la ruta ‘/sumar-animal’, Crear
una tercera ruta ('/dejar-animal') en la que mostraremos un formulario en el que el usuario de la
página puede introducir el nombre, el tipo y la edad de un animal. Cuando se haga click en el
botón del formulario, se enviará la información introducida a la ruta ('/sumar-animal'). Si ya
habéis creado el formulario, no hace falta este paso.*/

