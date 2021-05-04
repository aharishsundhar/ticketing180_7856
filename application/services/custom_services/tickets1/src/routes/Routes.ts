import { Request, Response, NextFunction } from "express";
import { tickets1Controller } from '../controller/tickets1Controller';


export class Routes {
    private tickets1: tickets1Controller = new tickets1Controller();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/tickets1').post(this.tickets1.GpCreate);
     }

}