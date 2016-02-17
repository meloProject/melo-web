const express = require("express");
const http = require("http");
const router = express.Router();
const Tres = require("tres");

/* GET home page. */
router.get("*", (req, res) => {
    Tres.getCurrentRouter(req.url);
    res.render(req.url, {
        title: 'Melo',
        name: 'Home',
        selection: req.url
    });
});

module.exports = router;
