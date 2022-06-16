import Server from "./classes/server";
import defaultRoutes from "./routes/default.routes";
import userRoutes from "./routes/user.routes";
import peliculaRoutes from "./routes/pelicula.routes";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const server = new Server();


server.app.use(cors());
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());
server.app.use('/',defaultRoutes);
server.app.use('/usuarios',userRoutes);
server.app.use('/peliculas',peliculaRoutes);

mongoose.connect('mongodb://localhost:27017/bdaiepflix',(err)=>{
    if(err) throw err;
    console.log('Base de datos ONLINE');
});

server.Start(()=>{
    console.log(`Servidor Corriendo en puerto  ${server.port}`);
});   