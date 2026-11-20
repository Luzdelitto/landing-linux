const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let archivo = 'index.html';

    if (req.url !== '/') {
        archivo = req.url.substring(1);
    }

    const ruta = path.join(__dirname, archivo);

    fs.readFile(ruta, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('Archivo no encontrado');
            return;
        }

        res.writeHead(200);
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});
