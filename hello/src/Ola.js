import { useState } from "react";

export default function Ola({nome})
{

    const [cor, setCor] = useState("blue");

   // console.log(nome)
    //let nome = "Edir";

    function alteraCor(){
        setCor("red");
    }

    // JSX
    return (
        <div>
            <h1 style={ {color: cor } } >Olá Turma { nome }</h1>

            <button onClick={ alteraCor }>Alterar Cor</button>
        </div>
    );
}