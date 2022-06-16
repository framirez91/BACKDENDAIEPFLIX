import { Schema,model } from "mongoose";


const peliculaSchema = new Schema(
    {
        
        name: { type: String, required: [true,'el nombre es requerido'] },
        poster: { type: String, required: [true,'El poster es requerido'] },
        year: { type: Number, required: [true,'el año es requerido'] },
    }

) 

interface IPelicula extends Document {
    name: string;
    poster: string;
    year: number;
}

export const Pelicula = model<IPelicula>('Pelicula', peliculaSchema);