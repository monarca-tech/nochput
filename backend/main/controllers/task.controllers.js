import { pool } from "../myslq.conection/mysq.js";

const GetdateTask =  async (req, res) => {
    try {
        const {rows} = await pool.query('SELECT * FROM tasks')
        res.json(rows)
    } catch (error) {
        console.error('Error al obtener tareas:', error)
        res.status(500).json({ message: 'Error al obtener tareas' })
    }
}

const GetIdTask =  async (req, res) => {
    try{
        const {id} = req.params
        const {rows} = await pool.query('select * from tasks where id_task = $1', [id])
        res.json(rows)

    }catch(error){
        console.log(error)
        res.json({message:'not get'})
    }
}

const PostTask = async (req, res) => {
    try{
        const {task} = req.body
        if(task.length> 0){
            const {rows} = await pool.query("insert into tasks (task,complete) values ($1,false)",[task])
            res.json(rows)
        }
    }catch(error){
        console.log(error)
        res.json({message:'not insert'})
    }

}

const PutTask = async(req,res)=>{
    try{
        const {id} = req.params

        const {task,complete} = req.body
        const {rows} = await pool.query('UPDATE tasks SET task = COALESCE($1,task) , complete = COALESCE($2,complete) WHERE id_task = $3 RETURNING *', [task,complete,id])
        res.json(rows)
    }catch(error){
        console.log(error)
        res.json({message:'not update'})
    }
}

const DeleteTask = async(req,res)=>{
    try{
        const {id} = req.params
        const {rows} = await pool.query('delete from tasks where id_task = $1', [id])
        res.json(rows)
    }catch(error){
        console.log(error)
        res.json({message:'not delete'})
    }
}
export {GetdateTask,GetIdTask,PostTask,PutTask,DeleteTask}