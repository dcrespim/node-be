import {Request, Response} from "express";

export class Routes {       
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
        .get((req: Request, res: Response) => {
        // Obtener todas las tareas            
            res.status(200).send({
                message: 'Acceso a obtener todas las tareas'
            })
        })        
        // Endpoint para método POST
        .post((req: Request, res: Response) => {   
        // Crear nueva tarea         
            res.status(200).send({
                message: 'Acceso a crear una tarea nueva'
            })
        })
        
        // Rutas para tratar tareas existentes de forma individual
        app.route('/task/:taskId')
        // Endpoint del método GET para obtener una sola tarea
        .get((req: Request, res: Response) => {
        // Obtener una tarea            
            res.status(200).send({
                message: 'Acceso a obtener una tarea'
            })
        })
        // Endpoint del método PUT
        .put((req: Request, res: Response) => {
        // Modificar una tarea           
            res.status(200).send({
                message: 'Acceso a modificar una tarea'
            })
        })
        // Endpoint del método DELETE
        .delete((req: Request, res: Response) => {       
        // Borrar una tarea
            res.status(200).send({
                message: 'Acceso a borrar una tarea'
            })
        })
    }
}
