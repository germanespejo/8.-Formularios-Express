const express = require("express");
const express = require("express");
const servidor = express();

servidor.listen(3001);

// 1ª PARTE:
// Queremos acceder a la url: http://localhost:3001/?nombre=tintín&edad=24
// Para ello, declaramos una variable por parámetro con request.query.algo y usamos `${}` en el response.send:

/*servidor.get("/", function(request, response){
    let nombreVariable = request.query.nombre
    let edadVariable = request.query.edad

    response.send(`Nombre: ${nombreVariable}, Edad: ${edadVariable}`)
})*/

//2ª PARTE:

servidor.use(express.static('public'));

//Escribimos "/persona" para acceder a "http://localhost:3001/persona?nombre=Hartz&edad=31".

servidor.get("/persona", function (request, response) {
    let nombreVariable = request.query.nombre
    let edadVariable = request.query.edad

    response.send(`Nombre: ${nombreVariable}, Edad: ${edadVariable}`)
})

// NODEMON:
// Para instalar Nodemon, "npm install -g nodemon" siendo g global, en todo el ordenador. Después, ejecutar Powershell
// como administrador, y escribir: "set-ExecutionPolicy Unrestricted" y darle a "S" y "Enter".
// Para usarlo, escribir nodemon index.js
// Nodemon evita tener que usar ctrl+c en la terminal y aplica los cambios automáticamente.