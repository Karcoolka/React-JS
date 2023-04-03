import CalculatorForm from "./calculator/CalculatorForm";
import './App.css';
import React, { useState } from 'react';

const title = "React kalkulačka";

const App = () => {
    const [xState, setXState] = useState(0);
    const [yState, setyState] = useState(0);

    const inputXonchange = (event) => {
        console.log(event.target.value);
        setXState(event.target.value);
    };

    const inputYonchange = (event) => {
        console.log(event.target.value);
        setyState(event.target.value);
    };

    return (
        <div className="App">
            <h1>{title}</h1>
            <CalculatorForm
                xOnChange={inputXonchange}
                yOnChange={inputYonchange}
                x={xState}
                y={yState}
            />
        </div>
    );
};

export default App;
