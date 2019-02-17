import {Request, Response} from "express";

import { TaskController } from "../controllers/task-controller";

export class Routes {       
        
    public taskController: TaskController = new TaskController();

    public routes(app): void {          
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'Acceso a petición GET'
            })
        })
        // task
        app.route('/task') 
        // Endpoint para método GET 
        .get(this.taskController.getTasks)        
        // Endpoint para método POST
        .post(this.taskController.addNewTask)
        
        // Rutas para tratar tareas existentes de forma individual
        app.route('/task/:taskId')
        // Endpoint del método GET para obtener una sola tarea
        .get(this.taskController.getTaskWithID)
        // Endpoint del método PUT
        .put(this.taskController.updateTask)
        // Endpoint del método DELETE
        .delete(this.taskController.deleteTask)
    }
}
