import '../Styles/Simulation.css';
import React, { useState } from 'react';
import axios from 'axios';

function NavesSofka() {

  const [result, setResult] = useState()
  let variable;
  const title = { title: 'Add variable POST' };
  const Rtbody = {
    tipoNave: 1,
    nombre: "LaNave",
    peso: 200,
    altura: 100,
    combustible: 2.0,
    mision: "Explorar Marte",
    destino: "Marte",
    paraInvestigacion:true
  }

  // make the backend accept a json of 3 jsons ... 
  // now is the front sending 3 different requests

  const postData = async (e) => {
    //Prevents the refreshing 
    console.log(Rtbody)
    e.preventDefault();

    /*variable = {
      rt: {
        name: "rt",
        dist: document.getElementById("Rt dist").value,
        mu: document.getElementById("Rt mu").value,
        sigma: document.getElementById("Rt sigma").value
      },

      phi: {
        name: "phi",
        dist: document.getElementById("phi dist").value,
        mu: document.getElementById("phi mu").value,
        sigma: document.getElementById("phi sigma").value
      },

      m: {
        name: "m",
        dist: document.getElementById("m dist").value,
        mu: document.getElementById("m mu").value,
        sigma: document.getElementById("m sigma").value
      }

    }*/

    console.log(variable)
    console.log(Rtbody)
    //Axios convert JSobject to JSON
    axios.post('http://localhost:8080/addnave',
      Rtbody
    ).then(res => {
      console.log(res.data);
    }
    ).catch(err => console.log(err))



  }


  const setVariable = () => {
    console.log(document.getElementById("Rt value").value);
    variable = {
      rt: {
        name: "rt",
        dist: document.getElementById("Rt dist").value,
        mu: document.getElementById("Rt mu").value,
        sigma: document.getElementById("Rt sigma").value
      },

      phi: {
        name: "phi",
        dist: document.getElementById("phi dist").value,
        mu: document.getElementById("phi mu").value,
        sigma: document.getElementById("phi sigma").value
      },

      m: {
        name: "m",
        dist: document.getElementById("m dist").value,
        mu: document.getElementById("m mu").value,
        sigma: document.getElementById("m sigma").value
      }

    }

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
              id='Rt mu'
              placeholder='Nombre'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='Rt mu'
              placeholder='Peso'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='Rt mu'
              placeholder='Altura'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='Rt mu'
              placeholder='Combustible'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='Rt mu'
              placeholder='Misión'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='Rt mu'
              placeholder='Carga'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='Rt mu'
              placeholder='Empuje'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='Rt mu'
              placeholder='Potencia'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <select className='value'
              id='phi dist'>
              <option value="select">Seleccione reusabilidad</option>
              <option value="True">Reutilizable</option>
              <option value="False">No reutilizable</option>
            </select>
            <button className='userInputForm-but'
              id='submitButton'
              type="submit"
              onClick={postData}>
              Submit
            </button>


          </div>

          <div className='variable' id='variables-form'>
            <label className="label">
              Nave Tripulada</label>
            <input
              className='value'
              id='Rt mu'
              placeholder='Nombre'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='Rt mu'
              placeholder='Peso'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='Rt mu'
              placeholder='Altura'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='Rt mu'
              placeholder='Combustible'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='Rt mu'
              placeholder='Misión'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='Rt mu'
              placeholder='Capacidad'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='Rt mu'
              placeholder='Duración meses'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='Rt mu'
              placeholder='Duración años'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <button className='userInputForm-but'
              id='submitButton'
              type="submit"
              onClick={postData}>
              Submit
            </button>
          </div>

          <div className='variable' id='variables-form'>
            <label className="label">
              Nave no tripulada</label>
            <input
              className='value'
              id='Rt mu'
              placeholder='Nombre'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='Rt mu'
              placeholder='Peso'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='Rt mu'
              placeholder='Altura'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='Rt mu'
              placeholder='Combustible'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='Rt mu'
              placeholder='Misión'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='value'
              id='Rt mu'
              placeholder='Destino'
            //onChange={(e) => setPassword(e.target.value)}
            />
            <select className='value'
              id='phi dist'>
              <option value="select">Seleccione objetivo</option>
              <option value="True">Investigación</option>
              <option value="False">Otros</option>
            </select>

            <button className='userInputForm-but'
              id='submitButton'
              type="submit"
              onClick={postData}>
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

