import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function MetasPorTime(props) {
    const [metas, setMetas] = useState([]);
    const [time, setTime] = useState([]);


    useEffect(
        () => {

            const { id } = props.match.params;
            console.log(id)
            axios.get(`http://localhost:3003/globalhitss/metasTime/${id}`)
                .then(
                    (res) => {
                        const get = res.data;
                        const metas = Object.assign(get);
                        setTime(metas)
                        setMetas(metas.metas)
                        console.log(metas)
                    }
                )
        }, [props.match.params]
    );


    return (
        <>

            <h3>Metas de {time.nome}</h3>
            <Link to={`/inserirMeta/${time.id}`}>Adicionar</Link>
            

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Meta</th>
                        <th>Resultado</th>
                        <th>Mais Informações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        metas.length > 0 ? (
                            metas.map(
                                (metax, index) =>(
                                    <tr key={index}>
                                        <td>{metax.data}</td>
                                        <td>{metax.meta}</td>
                                        <td>{metax.resultado}</td>
                                        <td><Link to={`/detalhesMeta/${metax.id}`}>Detalhes</Link></td>
                                    </tr>
                                    
                                )
                            )
                        ):(
                            <tr>
                                <td colSpan='3'>Nenhum usuário registrado</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            <p><Link to={`/detalhesTime/${metas.id}`}>Voltar</Link></p>
          
        </>
    )
};