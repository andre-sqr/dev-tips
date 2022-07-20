import Dica from "../models/dica-model.js";

const dicaController = (app)=> {
    app.post('/create', (req, res)=> {
        const body = req.body
        const dica = new Dica(body.texto);
        dica.inserirDica()
        res.json({"dica": dica})
    })

    app.get('/tips', (req, res)=> {
        const dicaAleatoria = new Dica();
        res.json({"dica_aleatoria": dicaAleatoria.retornarDica()})
    })
}

export default dicaController