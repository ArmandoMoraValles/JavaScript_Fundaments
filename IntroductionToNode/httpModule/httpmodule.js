const http = require('http');

//El modulo http permite crear un servidor web

// Crear un servidor de manera directa

// http.createServer((req,res)=>{ 

//     res.writeHead(200, {'content-type': 'text/html'}) //Escirbir una cabecera, darle mas informacion a el servidor
//     res.write('<h1>Servidor web creado de manera directa</h1>')
//     res.end();

// }).listen(3000)

// const handleServer = (req,res) => {
//     res.writeHead(200, {'content-type': 'text/html'}) //Escirbir una cabecera, darle mas informacion a el servidor
//     res.write('<h1>Servidor web creado a trabes de una funcion<h1>')
//     res.end();
// }

//http.createServer(handleServer).listen(3000);


//** FORMA MAS TIPICA DE CREAR EL SERVIDOR

const handleServer = (req, res) => {

    res.writeHead(200, {'content-type': 'text/html'}) //Escirbir una cabecera, darle mas informacion a el servidor
    res.write('<h1>Se creo un server de una mejor manera<h1>')
    res.end();

}

const server = http.createServer(handleServer);

server.listen(3000, ()=>{
    console.log("Server On port 3000");
});