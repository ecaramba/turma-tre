
export default function Todo(props)
{

    function alteraConcluido(evento){
        props.altera(props.ordem)
    }

    return (
        <div className="row my-1">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                       <div className="form-check">
                            <input 
                                onChange={alteraConcluido}
                                className="form-check-input" 
                                type="checkbox" 
                                checked={props.dados.feito} />
                        { (props.dados.feito === true)   
                            ? <label 
                                className="text-decoration-line-through">
                                    { props.dados.texto }</label>
                            : <label 
                                className="form-check-label">
                                    { props.dados.texto }</label>
                        }
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}