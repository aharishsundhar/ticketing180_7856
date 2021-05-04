
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const severity1Schema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   description: String
})

const severity1Model = mongoose.model('severity1', severity1Schema, 'severity1');
export default severity1Model;
