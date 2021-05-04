import { Request, Response } from 'express';
import {types1Dao} from '../dao/types1Dao';
import { CustomLogger } from '../config/Logger'
let types1 = new types1Dao();

export class types1Service {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into types1Service.ts: GpCreate')
     const  types1Data = req.body;
     types1.GpCreate(types1Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from types1Service.ts: GpCreate')
         callback(response);
         });
    }


}