var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

class ServerApp {
    constructor() {
        this.express = express();
    }

    createServer(){
        this.middleware();
        this.routes();
        this.express.set('port', 80);

        this.server = http.createServer(this.express);
        this.server.listen(80);
    }

    middleware() {
        this.express.use(bodyParser.json({ limit: '10mb' }));
        this.express.use(bodyParser.urlencoded({ extended: false, limit: '10mb', parameterLimit: 1000000 }));
    }

    routes() {
        this.express.get('*', (req, res, next) => {
            const filePath = path.join('dist', req.url);
            res.sendfile(filePath);
        });
        this.express.get('/', (req, res, next) => {
            const filePath = path.join('dist', 'index.html');
            res.sendfile(filePath);
        });
    }
}

const serverApp = new ServerApp();
serverApp.createServer();