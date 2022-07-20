import objData from "../infra/dicas-database.js"

let id = 0;

class Dica {
    constructor(text) {
        this.id = id++;
        this.texto = text
    }

    inserirDica = ()=> {
    objData.dicasArr.push(this)
    }

    retornarDica = ()=> {
    let randomTip = Math.floor(Math.random() * objData.dicasArr.length);
    return objData.dicasArr[randomTip];
    }
}

export default Dica;