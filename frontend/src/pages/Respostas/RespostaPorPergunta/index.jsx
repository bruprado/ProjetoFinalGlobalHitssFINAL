import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function RespostasPergunta(props) {
    const [respostas, setResposta] = useState([]);
    const [perguntas, setPerguntas] = useState([]);
    

    
    useEffect(
        () => {
            
            const {id} = props.match.params;
            console.log(id)
            axios.get(`http://localhost:3003/globalhitss/respsPergunta/${id}`)
                .then(
                    (res) => {
                        const get = res.data;
                        const respostas = Object.assign(get);
                        setPerguntas(respostas)
                        setResposta(respostas.resps)
                    }
                )
        }, [props.match.params]
    );
    
    
    return (
        <>
            <h3>Respostas para a pergunta "{perguntas.textoPergunta}"</h3>
            {/* <Link to={`/inserirPergunta/${time.id}`}>Adicionar</Link> */}
            

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>idFormulario</th>
                        <th>idAvaliador</th>
                        <th>idAvaliado</th>
                        <th>idPergunta</th>
                        <th>Resposta</th>                        
                        <th>Mais Informações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        respostas.length > 0 ? (
                            respostas.map(
                                (resposta, index) =>(
                                    <tr key={index}>
                                        <td>{resposta.idFormulario}</td>
                                        <td>{resposta.idAvaliador}</td>
                                        <td>{resposta.idAvaliado}</td>
                                        <td>{resposta.idPergunta}</td>
                                        <td>{resposta.respostaEnviada}</td>
                                        
                                        <td><Link to={`/detalhesResposta/${resposta.id}`}>Detalhes</Link></td>
                                    </tr>
                                )
                            )
                        ):(
                            <tr>
                                <td colSpan='6'>Nenhuma resposta registrada</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            <p><Link to={`/detalhesPergunta/${respostas.id}`}>Voltar</Link></p>
          
        </>
    )
};