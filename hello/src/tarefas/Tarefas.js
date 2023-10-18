import Todo from "./Todo"

import { useState } from "react";

let tarefas = [
    {
        texto: "tarefa 1",
        feito: false,
        dataLimite: new Date(),
        dataCriado: new Date()
    },
    {
        texto: "tarefa 2",
        feito: true,
        dataLimite: new Date(),
        dataCriado: new Date()
    },
    {
        texto: "tarefa 3",
        feito: false,
        dataLimite: new Date(),
        dataCriado: new Date()
    },
    {
        texto: "tarefa 4",
        feito: true,
        dataLimite: new Date(),
        dataCriado: new Date()
    },
]

export default function Tarefas(){

    const [allTarefas, setAllTarefas] = useState(tarefas);
    const [novaTarefa, setNovaTarefa] = useState("");

    function alteraTarefa(alterado){
        const nova = [...allTarefas];
        nova[alterado].feito = !nova[alterado].feito;

        setAllTarefas(nova);
    }

    function addTarefa(){
        let nova = {
            texto: novaTarefa,
            feito: false,
            dataLimite: new Date(),
            dataCriado: new Date()
        };

        setAllTarefas([nova, ...allTarefas]);
    }


    return (
        <div className="container">
            <h1>Lista de Tarefas</h1>

            <div className="card">
                <div className="card-body">
                    <div className="input-group">
                        <input
                            onChange={(ev) => setNovaTarefa(ev.target.value)} 
                            type="text" 
                            className="form-control" />
                        <button 
                            onClick={addTarefa}
                            className="btn btn-outline-secondary"
                            >Add</button>
                    </div>
                </div>
            </div>

            {
                allTarefas.map((item, i) => {
                    return <Todo dados={item} 
                        ordem={i} 
                        altera={alteraTarefa} key={i} />
                })
            }
            
        </div>
    )
}