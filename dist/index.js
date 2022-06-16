"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const default_routes_1 = __importDefault(require("./routes/default.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const pelicula_routes_1 = __importDefault(require("./routes/pelicula.routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const server = new server_1.default();
server.app.use((0, cors_1.default)());
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
server.app.use('/', default_routes_1.default);
server.app.use('/usuarios', user_routes_1.default);
server.app.use('/peliculas', pelicula_routes_1.default);
mongoose_1.default.connect('mongodb://localhost:27017/bdaiepflix', (err) => {
    if (err)
        throw err;
    console.log('Base de datos ONLINE');
});
server.Start(() => {
    console.log(`Servidor Corriendo en puerto  ${server.port}`);
});
