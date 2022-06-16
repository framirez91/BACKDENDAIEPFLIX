"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const defaultRoutes = (0, express_1.Router)();
defaultRoutes.get('/', (req, res) => {
    return res.json({
        message: 'Hello World! test get nodejs',
        ok: true
    });
});
defaultRoutes.post('/', (req, res) => {
    return res.json({
        message: 'Hello World! test post nodejs',
        ok: true
    });
});
exports.default = defaultRoutes;
