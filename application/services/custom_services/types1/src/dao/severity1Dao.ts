import * as mongoose from 'mongoose';
import severity1Model from '../models/severity1';
import { CustomLogger } from '../config/Logger'


export class severity1Dao {
    private severity1 = severity1Model;
    constructor() { }
public GpCreate(severity1Data, callback){
new CustomLogger().showLogger('info', 'Enter into severity1Dao.ts: GpCreate')
let temp = new severity1Model(severity1Data);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from severity1Dao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}