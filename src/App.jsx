import './App.css'
import { useState } from 'react';
import './Styles/index.css'

function App() {
  const [nameMovie, setNameMovie] = useState("");
  const [releaseYear, setReleaseYear] = useState("");

  // Creamos un manejador de eventos para cada uno de los inputs
  const onChangeNameMovie = (e) => setNameMovie(e.target.value);
  const onChangeReleaseYear = (e) => setReleaseYear(e.target.value);

  // Creamos una funcion para validar el nombre de la pelicula
  const validateUserName = (nameMovie) => {
    // Eliminamos los espacios en blanco
    const wihtoutSpaces = nameMovie.trim();
    // Validamos la extension
    if (wihtoutSpaces.length > 2) {
      return true;
    } else {
      return false;
    }
  };

  // Creamos una funcion para validar el año de lanzamiento
  const validateReleaseYear = (releaseYear) => {
    // Eliminamos los espacios en blanco
    const withoutSpaces = releaseYear.trim();
    // Separamos el string en un array para luego
    // recorrelo y validar si son numeros
    const releaseYearAsArray = withoutSpaces.split("");
    // every nos retorna true si todos son números
    const hasNumber = releaseYearAsArray.every((character) => {
    // Si el valor es NaN, no es un numero
    if (isNaN(character)) {
      return false;
    } else {
      return true;
    }
    });
    // Validamos la extension y que sean números
    if (withoutSpaces.length > 2 && hasNumber) {
      return true;
    } else {
      return false;
    }
  };
  
  const onSubmitForm = (e) => {
    e.preventDefault();
    
    // Realizamos las validaciones con los valores almacenados
    // en el estado
    const isUsernameValid = validateUserName(nameMovie);
    const isReleaseYearValid = validateReleaseYear(releaseYear);
    
    // Si al menos una de las validaciones es falsa
    // mostramos un mensaje de error
    if (!isReleaseYearValid || !isUsernameValid) {
    alert("Alguno de los datos ingresados no son correctos");
    } else {
    // Por ahora solo mostramos el nombre del usuario
    alert(`Tu pelicula favoritas es: ${nameMovie} ${releaseYear}`);
    }
  };

  return (
    <div className="App">
      <h3>Pelicula</h3>
      <h1>Ingresa tu pelicula favorita</h1>

      {/* Pasamos nuestro manejador al evento onSubmit */}
      <form onSubmit={onSubmitForm}>
      {/*
      Creamos dos inputs controlados
      pasando el estado como value y el manejador
      al evento onChange
      */}
      <input
      type="text"
      placeholder="Nombre de la pelicula"
      value={nameMovie}
      onChange={onChangeNameMovie}
      />
      <input
      type="text"
      placeholder="Año de lanzamiento"
      value={releaseYear}
      onChange={onChangeReleaseYear}
      />
      {/*
      Mediante el type nos aseguramos que
      se dispare el evento onSubmit al hacer click
      en el botón
      */}
      <button className="submitButton" type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App
