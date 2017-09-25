//маршрутизатор запросов
function route(handle, pathname, request, response) {
    console.log("About to route a request for " + pathname);
    //если существует функция для обработки запроса, вызываем ее
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}
exports.route = route;