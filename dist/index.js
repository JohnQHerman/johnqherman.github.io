"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.use('/', function (req, res) { return res.send("Hello World!"); });
app.listen(3000, function () { return console.log("server started on port 3000. listening..."); });
//# sourceMappingURL=index.js.map