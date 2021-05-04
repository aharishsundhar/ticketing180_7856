import * as mongoose from 'mongoose';
import tickets1Model from '../models/tickets1';
import { CustomLogger } from '../config/Logger'


export class tickets1Dao {
    private tickets1 = tickets1Model;
    constructor() { }
public GpCreate(tickets1Data, callback){
new CustomLogger().showLogger('info', 'Enter into tickets1Dao.ts: GpCreate')
let temp = new tickets1Model(tickets1Data);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from tickets1Dao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}