"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pelicula = void 0;
const mongoose_1 = require("mongoose");
const peliculaSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, 'el nombre es requerido'] },
    poster: { type: String, required: [true, 'El poster es requerido'] },
    year: { type: Number, required: [true, 'el año es requerido'] },
});
exports.Pelicula = (0, mongoose_1.model)('Pelicula', peliculaSchema);
