import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Axios from 'axios';
import Listado from './components/Listado';

function App() {

  const [categoria, setCategoria] = useState('general');

  const [pais, setPais] = useState('mx');

  const [noticias, setNoticias] = useState([]);

  useEffect(() => {

    const consultarAPI = async () => {
      const api = 'b5f2ad80804047a3ab81140a14c30f1b';
      const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=${api}`;
      const respuesta = await Axios.get(url);
      setNoticias(respuesta.data.articles);

    };
    consultarAPI();
  }, [pais, categoria])

  return (
    <Fragment>
      <Header
        titulo="Buscador de noticias"
      />

      <div className="container white">
        <Formulario
          setPais={setPais}
          setCategoria={setCategoria}
        />

        <Listado
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
