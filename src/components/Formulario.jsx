import React from 'react';
import styles from '../styles/Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({ setCategoria, setPais }) => {

    const paises = [
        { value: 'mx', label: 'México' },
        { value: 'us', label: 'Estados Unidos' },
        { value: 'ar', label: 'Argentina' },
        { value: 'co', label: 'Colombia' },
        { value: 'ca', label: 'Canada' },
        { value: 'it', label: 'Italia' },
    ];
    const opciones = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnología' },
    ];

    const [pais, SelectPais] = useSelect('mx', paises);

    const [categoria, SelectNoticias] = useSelect('general', opciones);

    const buscarNoticias = e => {
        e.preventDefault();

        setPais(pais)
        setCategoria(categoria);
    };

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
                    <SelectPais />
                    <br />
                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`btn-large amber darken-2 ${styles['btn-block']}`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired,
    setPais: PropTypes.func.isRequired
}

export default Formulario;