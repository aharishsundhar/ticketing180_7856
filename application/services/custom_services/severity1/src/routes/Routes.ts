import { Request, Response, NextFunction } from "express";
import { types1Controller } from '../controller/types1Controller';


export class Routes {
    private types1: types1Controller = new types1Controller();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/types1').post(this.types1.GpCreate);
     }

}