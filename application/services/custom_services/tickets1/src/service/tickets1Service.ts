import { Request, Response } from 'express';
import {tickets1Dao} from '../dao/tickets1Dao';
import { CustomLogger } from '../config/Logger'
let tickets1 = new tickets1Dao();

export class tickets1Service {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into tickets1Service.ts: GpCreate')
     const  tickets1Data = req.body;
     tickets1.GpCreate(tickets1Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from tickets1Service.ts: GpCreate')
         callback(response);
         });
    }


}