import { Request, Response } from 'express';
import { types1Service } from '../service/types1Service';
import { CustomLogger } from '../config/Logger'
let types1 = new types1Service();

export class types1Controller {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
types1.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into types1Controller.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from types1Controller.ts: GpCreate');
    })}


}