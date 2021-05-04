import { Request, Response } from 'express';
import { tickets1Service } from '../service/tickets1Service';
import { CustomLogger } from '../config/Logger'
let tickets1 = new tickets1Service();

export class tickets1Controller {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
tickets1.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into tickets1Controller.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from tickets1Controller.ts: GpCreate');
    })}


}