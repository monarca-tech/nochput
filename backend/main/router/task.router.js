import { Router } from "express";
import { GetdateTask, GetIdTask, PostTask, PutTask, DeleteTask } from "../controllers/task.controllers.js";
const routertask = Router()

// enpoint gets
routertask.get('/task',GetdateTask)
routertask.get('/task/:id',GetIdTask)

// enpoint post
routertask.post('/task', PostTask)


// enpoint put 
routertask.put('/task/:id',PutTask)
//enpoint delete
routertask.delete('/task/:id', DeleteTask)



export default routertask