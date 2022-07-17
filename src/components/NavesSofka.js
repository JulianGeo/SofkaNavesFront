import '../Styles/Simulation.css';
import React, { useState } from 'react';
import axios from 'axios';

function NavesSofka() {

  const [result, setResult] = useState()
  let variable;
  const title = { title: 'Add variable POST' };

  //Creación de nave tripulada
  const postDataNaveTrip = async (e) => {
    e.preventDefault();

    variable = {
      tipoNave: 1,
      nombre: document.getElementById("NavTrip nombre").value,
      peso: document.getElementById("NavTrip peso").value,
      altura: document.getElementById("NavTrip altura").value,
      combustible: document.getElementById("NavTrip combustible").value,
      mision: document.getElementById("NavTrip mision").value,
      capacidad: document.getElementById("NavTrip capacidad").value,
      duracionMouth: document.getElementById("NavTrip duracionMonth").value,
      duracionYear:document.getElementById("NavTrip duracionYear").value

    }

    //console.log(variable)

    axios.post('http://localhost:8080/addnave',
      variable
    ).then(res => {
      console.log(res.data);
    }
    ).catch(err => console.log(err))
  }

  //Creación de nave no tripulada
  const postDataNaveNoTrip = async (e) => {
    e.preventDefault();

    variable = {
      tipoNave: 2,
      nombre: document.getElementById("NavNoTrip nombre").value,
      peso: document.getElementById("NavNoTrip peso").value,
      altura: document.getElementById("NavNoTrip altura").value,
      combustible: document.getElementById("NavNoTrip combustible").value,
      mision: document.getElementById("NavNoTrip mision").value,
      destino: document.getElementById("NavNoTrip destino").value,
      paraInvestigacion: document.getElementById("NavNoTrip invest").value
    }

    //console.log(variable)
    //Axios convert JSobject to JSON
    axios.post('http://localhost:8080/addnave',
      variable
    ).then(res => {
      console.log(res.data);
    }
    ).catch(err => console.log(err))
  }

    //Creación de nave lanzadora
    const postDataNaveLanz = async (e) => {
      e.preventDefault();
  
      variable = {
        tipoNave: 3,
        nombre: document.getElementById("NavLanz nombre").value,
        peso: document.getElementById("NavLanz peso").value,
        altura: document.getElementById("NavLanz altura").value,
        combustible: document.getElementById("NavLanz combustible").value,
        mision: document.getElementById("NavLanz mision").value,
        carga: document.getElementById("NavLanz carga").value,
        empuje: document.getElementById("NavLanz empuje").value,
        potencia:document.getElementById("NavLanz potencia").value,
        reuttilizable:document.getElementById("NavLanz reusable").value
      }
  
      //console.log(variable)
      //Axios convert JSobject to JSON
      axios.post('http://localhost:8080/addnave',
        variable
      ).then(res => {
        console.log(res.data);
      }
      ).catch(err => console.log(err))
    }

  return (
    <div className="mainPage">

      <div className='form-container' >
        <h1 className='title'>Agregar Naves</h1>
        <form className='form'
        //onSubmit={postData}
        >
          <div className='variable' id='variables-form'>
            <label className="label">
              Nave Lanzadora</label>
            <input
              className='value'
              id='NavLanz nombre'
              placeholder='Nombre'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='NavLanz peso'
              placeholder='Peso'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='NavLanz altura'
              placeholder='Altura'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='NavLanz combustible'
              placeholder='Combustible'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='NavLanz mision'
              placeholder='Misión'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='NavLanz carga'
              placeholder='Carga'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='NavLanz empuje'
              placeholder='Empuje'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='NavLanz potencia'
              placeholder='Potencia'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <select className='value'
              id='NavLanz reusable'>
              <option value="select">Seleccione reusabilidad</option>
              <option value="true">Reutilizable</option>
              <option value="false">No reutilizable</option>
            </select>
            <button className='userInputForm-but'
              id='submitButton'
              type="submit"
              onClick={postDataNaveLanz}>
              Submit
            </button>


          </div>

          <div className='variable' id='variables-form'>
            <label className="label">
              Nave Tripulada</label>
            <input
              className='value'
              id='NavTrip nombre'
              placeholder='Nombre'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='NavTrip peso'
              placeholder='Peso'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='NavTrip altura'
              placeholder='Altura'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='NavTrip combustible'
              placeholder='Combustible'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='NavTrip mision'
              placeholder='Misión'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='NavTrip capacidad'
              placeholder='Capacidad'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='NavTrip duracionMonth'
              placeholder='Duración meses'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='NavTrip duracionYear'
              placeholder='Duración años'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <button className='userInputForm-but'
              id='submitButton'
              type="submit"
              onClick={postDataNaveTrip}>
              Submit
            </button>
          </div>

          <div className='variable' id='variables-form'>
            <label className="label">
              Nave no tripulada</label>
            <input
              className='value'
              id='NavNoTrip nombre'
              placeholder='Nombre'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='NavNoTrip peso'
              placeholder='Peso'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='NavNoTrip altura'
              placeholder='Altura'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='NavNoTrip combustible'
              placeholder='Combustible'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='NavNoTrip mision'
              placeholder='Misión'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='NavNoTrip destino'
              placeholder='Destino'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <select className='value'
              id='NavNoTrip invest'>
              <option value="select">Seleccione objetivo</option>
              <option value="true">Investigación</option>
              <option value="false">Otros</option>
            </select>

            <button className='userInputForm-but'
              id='submitButton'
              type="submit"
              onClick={postDataNaveNoTrip}>
              Submit
            </button>

          </div>
        </form>
      </div>


      <div className='results-container'>
        <h1 className='title'>Naves</h1>
        <div className='results'>

        </div>

      </div>

    </div>
  )
}

export default NavesSofka;

