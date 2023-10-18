import "./lista.css";
import { useState } from "react";

let cidades = ["Curitiba", "Pinhais", "Arapongas", "Blumenau"];

export default function Lista(){

    const [nomeCidade, setNomeCidade] = useState("");

    let valores = cidades.filter((item, idx) => {
        let exp = new RegExp(nomeCidade, "i");
        return item.search(exp) > -1;

    }).map((item, idx) => {
        return <li key={idx}>{item}</li>
    })

    function nome(event) {
        setNomeCidade(event.target.value)
    }

    return (
        <>
            <h1>Lista de Cidades</h1>
            <input type="text" onChange={nome} />

            <ul className="lista">
                { valores }
            </ul>
            
        </>
    );
}

