import axios from 'axios';
import { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';

export default function InserirFormulario(props) {
    const [state, setState] = useState({
        formulario: {
            idTime: '',
            tipo: ''
        }
    });
    const [redirect, setRedirect] = useState(false);

    useEffect(
        () => {
            const{id} = props.match.params;
            setState({
                formulario: {
                    idTime: id,
                    tipo: ''
                }
            });
        },[props.match.params]
    )

    const handleInputChange = (e) => {
        const target = e.target
        const name = target.name;
        const value = target.value;

        setState({
            formulario: {
                ...state.formulario, [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        const req = state.formulario;
        axios({
            method: 'post',
            url: 'http://localhost:3003/globalhitss/inserirFormulario',
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
        return <Redirect to={`/formulariosTime/${state.formulario.idTime}`} />
    } else {
        return (
            <div className="form">
                <h3>Adicionar Formulário</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group form-hidden">
                        <label>idTime</label>
                        <input
                            type='text'
                            name='idTime'
                            className='form-control'
                            placeholder="idTime"
                            required
                            value={state.formulario.idTime}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Tipo</label>
                        <input
                            type='text'
                            name='tipo'
                            className='form-control'
                            placeholder="tipo"
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type='submit' className="btn btn-success mt-3">
                        Adicionar
                    </button>
                </form>
                <p><Link to={`/formulariosTime/${state.formulario.idTime}`}>Voltar</Link> </p>
            </div>
        )

    }

}
