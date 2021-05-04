import { Request, Response, NextFunction } from "express";
import { severity1Controller } from '../controller/severity1Controller';


export class Routes {
    private severity1: severity1Controller = new severity1Controller();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/severity1').post(this.severity1.GpCreate);
     }

}