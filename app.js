"use strict";

require('babel-register')({ presets: ['es2015', 'react', 'stage-0'] });
// IN NODE MODULES
const express = require("express");
const compress = require("compression");
const logger = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const reactEngine = require("react-engine");
const colors = require("colors");

// OUT OF NODE MODULES
const index = require("./server/controllers/routes");
const routes = require("./public/routes.jsx");

// INITIALICE EXPRESS
const app = express();
// REACT ENGINE SETUP
var engine = reactEngine.server.create({
    routes: routes,
    routesFilePath: path.join(__dirname, "./public/routes.jsx"),
    performanceCollector: (stats)=> {
        //console.log(stats);
    }
});

// view engine setup
app.engine(".jsx", engine);
app.set("views", path.join(__dirname, "public/views"));
app.set("view engine", "jsx");
app.set("view", reactEngine.expressView);

// app.use(favicon(__dirname + "/public/favicon.ico"));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(compress(), index);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    console.error(err .red);
   
    if (res.headersSent) {
        return next(err);
    }

    if (err._type && err._type === reactEngine.reactRouterServerErrors.MATCH_REDIRECT) {
        return res.redirect(302, err.redirectLocation);
    }
    else if (err._type && err._type === reactEngine.reactRouterServerErrors.MATCH_NOT_FOUND) {
        return res.status(404).send("Route Not Found!");
    }
    else {
        // for reactEngine.reactRouterServerErrors.MATCH_INTERNAL_ERROR or
        // any other error we just send the error message back
        return res.status(500).send(err.message);
    }
});

module.exports = app;