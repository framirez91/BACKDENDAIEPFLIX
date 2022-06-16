
import { Router,Request,Response } from 'express';

const defaultRoutes = Router();

defaultRoutes.get('/', (req:Request, res:Response) => {
    return res.json({
        message: 'Hello World! test get nodejs',
        ok:true
    })

});

defaultRoutes.post('/', (req:Request, res:Response) => {
    return res.json({
        message: 'Hello World! test post nodejs',
        ok:true
    })

});



export default defaultRoutes;