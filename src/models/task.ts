import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TaskSchema = new Schema({
    title: {
        type: String,
        required: 'Enter a title'
    },
    description: {
        type: String,
        required: 'Enter a description'
    },
    creation: {
        type: Date,
        default: Date.now        
    },
    scheduled: {
        type: Date   
    },
    done: {
        type: Date         
    }
});