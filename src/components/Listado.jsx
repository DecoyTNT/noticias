import React from 'react'
import Noticia from './Noticia';
import PropTypes from 'prop-types';

const Listado = ({ noticias }) => {
    return (
        <div className="row">
            {noticias.map(noticia => (
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
    );
}

Listado.propTypes = {
    noticias: PropTypes.array.isRequired
}

export default Listado;