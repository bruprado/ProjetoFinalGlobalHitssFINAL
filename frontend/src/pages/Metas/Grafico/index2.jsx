import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function Exemplo1(){
    //dados que serao lidos e mostrados no gráfico
    const data = [
        {mes: "jan", bruto: 400, custo: 600},
        {mes: "fev", bruto: 374, custo: 250},
        {mes: "mar", bruto: 420, custo: 370},
        {mes: "abril", bruto: 610, custo: 500},
    ];
    return(
        <div className="container">
            <h3>Exemplo 1</h3>

            {/* define a estrutura geral do grafico */}
            <LineChart width={800} height={500} data={data} margin={{ top: 5, right:20, bottom:5, left:0}}>

                {/* define a linha que informação sera lida na vertical, no caso o bruto */}
                <Line type="monotone" dataKey="bruto" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDacharray="5 5" />

                {/* indica nome na vertical - mes */}
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
}

export default Exemplo1;