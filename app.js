import express from 'express';
import dicaController from './src/controllers/dica-controller.js';

const app = express()
const port = 3333

app.use(express.json())


dicaController(app)

app.listen(port, ()=> {
    console.log(`http://localhost:${port}/`)
})