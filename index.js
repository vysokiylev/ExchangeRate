var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// список обработчиков запросов
var handle = {};
handle["/"] = requestHandlers.main;
handle["/css/style.css"] = requestHandlers.loadCss;
handle["/js/main.js"] = requestHandlers.loadJs;
handle["/images/Trump_happy.jpg"] = requestHandlers.loadHappyTrump;
handle["/images/Trump_sad.jpg"] = requestHandlers.loadSadTrump;
server.start(router.route, handle);