import React from "react";
import { AreaChart, Area, ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Exemplo2(props) {

    // const [metas, setMetas] = useState([]);
    // const [time, setTime] = useState([]);


    // useEffect(
    //     () => {

    //         const { id } = props.match.params;
    //         console.log(id)
    //         axios.get(`http://localhost:3003/globalhitss/metasTime/${id}`)
    //             .then(
    //                 (res) => {
    //                     const get = res.data;
    //                     const metas = Object.assign(get);
    //                     setTime(metas)
    //                     setMetas(metas.metas)
    //                     console.log(metas)
    //                 }
    //             )
    //     }, [props.match.params]
    // );

    // return (
    //     <div className="container">
    //         <div className="row">
    //             <div className="col-md-10">

    //             <h3>Metas de {time.nome}</h3>

    //                 <ResponsiveContainer width="100%" aspect={3}>
    //                     <AreaChart width={500} height={500} data={state} margin={{ top: 10, right: 30, bottom: 0, left: 0 }}>
    //                         <defs>
    //                             <linearGradient id="grad" x1="0" y1="0" x2="0" y2="0">
    //                                 <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
    //                                 <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
    //                             </linearGradient>
    //                         </defs>
    //                         <CartesianGrid strokeDacharray="3 3" />
    //                         <XAxis dataKey="name" />
    //                         <YAxis type="number" />
    //                         <Tooltip />
    //                         <Area type="monotone" dataKey="valor" stroke="#8884d8" fillOpacity={1} fill="url(#grad)" />
    //                     </AreaChart>
    //                 </ResponsiveContainer>
    //             </div>

    //             <div className="col-md-2">
    //                 <h3>Altere</h3>
    //                 <br /><br />
    //                 <form action="" className="form">
    //                     {
    //                     metas.map(
    //                             (metax, index) => {
    //                             return(
    //                             <div key={index}>
    //                                 <input className="form-control"
    //                                     type="number"
    //                                     name="data"
    //                                     value={metax.data}
    //                                     placeholder={data.valor}
    //                                     onChange={handleInputChange}
    //                                     onBlur={handleOnClick} />
    //                             </div>
    //                             )}
    //                         )}
    //                 </form>
    //             </div>
    //         </div>
    //     </div>
    // );
}

export default Exemplo2;