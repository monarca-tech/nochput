// open import
import express from 'express'
import cors from 'cors'
import { PORT } from './config.js'
import { pool } from './myslq.conection/mysq.js'
import routertask from './router/task.router.js'
// close import


const app = express()
// recurso middleware
app.use(cors())
app.use(express.json())
app.use('/api', routertask)
//enpoint
app.get('/', (req, res) => {
    res.send('welcome to api noch')
})



// manejo de error

app.get('*', (req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada' })
})

// run serve
app.listen(PORT, async() => {
    console.log(`Example app listening on port ${PORT}!`)
    await pool.query(`
            create table if not exists tasks (
            id_task int not null auto_increment,
            task varchar(255) not null,
            complete boolean not null default false,
            primary key (id_task)
        );
    `)
})