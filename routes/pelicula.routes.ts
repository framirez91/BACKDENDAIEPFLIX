import { Router, Request, Response } from "express";
import { Pelicula } from "../models/pelicula.models";

const peliculaRoutes = Router();


peliculaRoutes.get("/", (req: Request, res: Response) => {
    const pelicula = Pelicula.find({}).exec((err, peliculas) => {
        if (err) {
            res.json({
                ok: false,
                err,
            });
        } else {
            res.json({
                ok: true,
                peliculas,
            });
        }
    });
}
);



peliculaRoutes.post("/", (req: Request, res: Response) => {
  const pelicula = {
    name: req.body.name,
    poster: req.body.poster,
    year: req.body.year,
  };
  Pelicula.create(pelicula)
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

export default peliculaRoutes;
