import { Request, Response } from 'express';
import { severity1Service } from '../service/severity1Service';
import { CustomLogger } from '../config/Logger'
let severity1 = new severity1Service();

export class severity1Controller {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
severity1.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into severity1Controller.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from severity1Controller.ts: GpCreate');
    })}


}