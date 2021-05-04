import * as mongoose from 'mongoose';
import types1Model from '../models/types1';
import { CustomLogger } from '../config/Logger'


export class types1Dao {
    private types1 = types1Model;
    constructor() { }
public GpCreate(types1Data, callback){
new CustomLogger().showLogger('info', 'Enter into types1Dao.ts: GpCreate')
let temp = new types1Model(types1Data);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from types1Dao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}