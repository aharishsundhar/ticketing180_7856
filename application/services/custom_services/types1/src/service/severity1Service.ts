import { Request, Response } from 'express';
import {severity1Dao} from '../dao/severity1Dao';
import { CustomLogger } from '../config/Logger'
let severity1 = new severity1Dao();

export class severity1Service {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severity1Service.ts: GpCreate')
     const  severity1Data = req.body;
     severity1.GpCreate(severity1Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from severity1Service.ts: GpCreate')
         callback(response);
         });
    }


}