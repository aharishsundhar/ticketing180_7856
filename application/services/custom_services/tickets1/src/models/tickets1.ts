
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const tickets1Schema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   description: String,
   groups: String,
   types: { type: Schema.Types.String, ref: 'types1' },
   severity: { type: Schema.Types.String, ref: 'severity1' }
})

const tickets1Model = mongoose.model('tickets1', tickets1Schema, 'tickets1');
export default tickets1Model;
