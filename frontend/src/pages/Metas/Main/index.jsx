import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function MainFormularios (props) {
    const [state, setState] = useState({
        times: []
    });

    useEffect(
        () => {
            axios.get(`http://localhost:3003/globalhitss/times`)
                .then(
                    res => {
                        const times = res.data;
                        setState({ times })
                    }
                )
        }, []
    )

    const { times } = state;
    return (
        <>
            <h3>Formulários por Time</h3>
            

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Mais Informações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        times.map(

                            (time, key) =>
                            (
                                <tr key={key}>
                                    <td>{time.nome}</td>
                                    <td><Link to={`/metasTime/${time.id}`}>Ver metas</Link></td>
                                </tr>
                            )
                        )
                    }


                </tbody>
            </table>
            <p><Link>Voltar</Link></p>
        </>
    )
};