import React, { useState } from 'react';
import PropTypes from 'prop-types';

const useSelect = (stateInicial, opciones) => {

    const [state, setstate] = useState(stateInicial);

    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => setstate(e.target.value)}
        >
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    );

    return [state, SelectNoticias];

}

useSelect.propTypes = {
    stateInicial: PropTypes.string.isRequired,
    opciones: PropTypes.array.isRequired
}

export default useSelect;