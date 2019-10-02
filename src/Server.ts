import * as http from 'http';

const corsHeader = { 'Access-Control-Allow-Origin': 'http://localhost:8080' }
const textHeader = { 'Access-Control-Allow-Origin': 'http://localhost:8080', 'Content-Type': 'text/plain' }
const jsonHeader = { 'Access-Control-Allow-Origin': 'http://localhost:8080', 'Content-Type': 'application/json' }

export class Server {

    private incomingMessage: http.IncomingMessage;
    private serverResponse: http.ServerResponse

    public createServer() {
        http.createServer((req, res) => {
            this.incomingMessage = req;
            this.serverResponse = res;
            this.respond();
        }).listen(8080);
    }

    private respond() {
        const url = this.incomingMessage.url;
        switch (url) {
            case '/managers':
                this.serverResponse.writeHead(200, jsonHeader);
                this.serverResponse.end(JSON.stringify('managers'));
                break;
            case '/employees':
                this.serverResponse.writeHead(200, jsonHeader);
                this.serverResponse.end(JSON.stringify('employees'));
                break;
            default:
                this.serverResponse.writeHead(404, textHeader);
                this.serverResponse.end('Page not found!');
                break;
        }

    }

}

new Server().createServer();