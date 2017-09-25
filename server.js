//Подключение нужных модулей
var http = require("http"),
    url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname; //Путь поступающего запроса
        console.log("Request for " + pathname + " received.");
        route(handle, pathname, request, response);
    }
    http.createServer(onRequest).listen(8888); //создание сервера
    console.log("Server has started.");
}

exports.start = start;