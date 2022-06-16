"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pelicula_models_1 = require("../models/pelicula.models");
const peliculaRoutes = (0, express_1.Router)();
peliculaRoutes.get("/", (req, res) => {
    const pelicula = pelicula_models_1.Pelicula.find({}).exec((err, peliculas) => {
        if (err) {
            res.json({
                ok: false,
                err,
            });
        }
        else {
            res.json({
                ok: true,
                peliculas,
            });
        }
    });
});
peliculaRoutes.post("/", (req, res) => {
    const pelicula = {
        name: req.body.name,
        poster: req.body.poster,
        year: req.body.year,
    };
    pelicula_models_1.Pelicula.create(pelicula)
        .then((peliculaDb) => {
        res.json({
            ok: true,
            pelicula: peliculaDb,
        });
    })
        .catch((err) => {
        res.json({
            ok: false,
            err,
        });
    });
});
exports.default = peliculaRoutes;
