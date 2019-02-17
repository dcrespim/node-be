import * as mongoose from 'mongoose';
import { TaskSchema } from '../models/task';
import { Request, Response } from 'express';

const Task = mongoose.model('Task', TaskSchema);

export class TaskController{

    public getTasks (req: Request, res: Response) {           
        Task.find({}, (err, task) => {
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }

    public getTaskWithID (req: Request, res: Response) {           
        Task.findById(req.params.taskId, (err, task) => {
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }

    public addNewTask (req: Request, res: Response) {                
        let newTask = new Task(req.body);
    
        newTask.save((err, task) => {
            if(err){
                res.send(err);
            }    
            res.json(task);
        });
    }

    public updateTask (req: Request, res: Response) {           
        Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, (err, task) => {
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }

    public deleteTask (req: Request, res: Response) {           
        Task.remove({ _id: req.params.taskId }, (err, task) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted task!'});
        });
    }
}
