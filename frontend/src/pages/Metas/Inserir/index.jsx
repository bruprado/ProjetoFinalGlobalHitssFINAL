import axios from 'axios';
import { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';

export default function InserirMeta(props) {
    const [state, setState] = useState({
        meta: {
            data: '',
            meta: '',
            resultado: '',
            idTime: ''
        }
    });
    const [redirect, setRedirect] = useState(false);

    useEffect(
        () => {
            const { id } = props.match.params;
            setState({
                meta: {
                    data: '',
                    meta: '',
                    resultado: '',
                    idTime: id
                }
            });
        }, [props.match.params]
    )

    const handleInputChange = (e) => {
        const target = e.target
        const name = target.name;
        const value = target.value;

        setState({
            meta: {
                ...state.meta, [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        const req = state.meta;
        axios({
            method: 'post',
            url: 'http://localhost:3003/globalhitss/inserirMeta',
            data: req,
            headers: { "Content-Type": "application/json" }
        }).then(
            data => {
                if (data) {
                    alert("Dados inseridos com sucesso")
                    setRedirect(true);
                }
            }
        ).catch(
            () => { console.log("Não foi possível adicionar os dados") }
        );
        e.preventDefault();
    }

    console.log(state)

    if (redirect) {
        return <Redirect to={`/metasTime/${state.meta.idTime}`} />
    } else {
        return (
            <div className="form">
                <h3>Adicionar Metas</h3>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                        <label>Data (número do mês)</label>
                        <input
                            type='number'
                            name='data'
                            className='form-control'
                            required
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Meta (%)</label>
                        <input
                            type='number'
                            name='meta'
                            className='form-control'
                            placeholder="não incluir o símbolo %"
                            required
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Resultado (%)</label>
                        <input
                            type='number'
                            name='resultado'
                            className='form-control'
                            placeholder="não incluir o símbolo %"
                            required
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group form-hidden">
                        <label>idTime</label>
                        <input
                            type='text'
                            name='idTime'
                            className='form-control'
                            placeholder="idTime"
                            required
                            value={state.meta.idTime}
                            onChange={handleInputChange}
                        />
                    </div>
                    
                    <button type='submit' className="btn btn-success mt-3">
                        Adicionar
                    </button>
                </form>
                <p><Link to={`/metasTime/${state.meta.idTime}`}>Voltar</Link> </p>
            </div>
        )

    }

}
