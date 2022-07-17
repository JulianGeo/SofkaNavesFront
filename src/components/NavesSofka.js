import '../Styles/NaveSofka.css';
import axios from 'axios';
import { useState } from 'react';


function NavesSofka() {

  let variable;
  const [navesLanzList, setNavesLanzList] = useState(
    [{
      nombre: null,
      peso: null,
      altura: null,
      combustible: null,
      mision: null,
      carga: null,
      empuje: null,
      potencia: null
    }])

  const [navesTripList, setNavesTripList] = useState(
    [{
      nombre: null,
      peso: null,
      altura: null,
      combustible: null,
      mision: null,
      capacidad: null,
      duracionMouth: null,
      duracionYear: null
    }])

  const [navesNoTripList, setNavesNoTripList] = useState(
    [{
      nombre: null,
      peso: null,
      altura: null,
      combustible: null,
      mision: null,
      destino: null,
    }])





  //Inicialización de DB
  const postInitialData = async (e) => {
    e.preventDefault();

    variable = {
      nave1: {
        tipoNave: 1,
        nombre: "Colombia1",
        peso: 100,
        altura: 60,
        combustible: 1,
        mision: "Explorar la luna",
        capacidad: 3,
        duracionMouth: 2,
        duracionYear: 1
      },
      nave2: {
        tipoNave: 1,
        nombre: "Colombia2",
        peso: 100,
        altura: 60,
        combustible: 2,
        mision: "Evaluar sostenbilidad en marte",
        capacidad: 10,
        duracionMouth: 2,
        duracionYear: 20
      },
      nave3: {
        tipoNave: 1,
        nombre: "Colombia3",
        peso: 100,
        altura: 60,
        combustible: 3,
        mision: "Evaluar estaciones en marte",
        capacidad: 2,
        duracionMouth: 2,
        duracionYear: 15
      },
      nave4: {
        tipoNave: 2,
        nombre: "Colombia4",
        peso: 50,
        altura: 30,
        combustible: 4,
        mision: "Explorar minerales en Saturno",
        destino: "Saturno",
      },
      nave5: {
        tipoNave: 2,
        nombre: "Colombia5",
        peso: 55,
        altura: 32,
        combustible: 4,
        mision: "Explorar minerales en Venus",
        destino: "Venus",
      },
      nave6: {
        tipoNave: 2,
        nombre: "Colombia6",
        peso: 40,
        altura: 28,
        combustible: 4,
        mision: "Explorar minerales en Jupiter",
        destino: "Jupiter",
      },
      nave7: {
        tipoNave: 3,
        nombre: "Cohete1",
        peso: 40,
        altura: 28,
        combustible: 5,
        mision: "Lanzar a Colombia1",
        carga: 150,
        empuje: 4000,
        potencia: 50000,
        reuttilizable: true,
      },
      nave8: {
        tipoNave: 3,
        nombre: "Cohete2",
        peso: 30,
        altura: 25,
        combustible: 5,
        mision: "Lanzar a Colombia2",
        carga: 80,
        empuje: 2000,
        potencia: 30000,
        reuttilizable: true,
      },
      nave9: {
        tipoNave: 3,
        nombre: "Cohete3",
        peso: 40,
        altura: 25,
        combustible: 5,
        mision: "Lanzar a Colombia3",
        carga: 250,
        empuje: 7000,
        potencia: 90000,
        reuttilizable: true,
      }

    }

    //console.log(variable)

    axios.post('http://localhost:8080/addnave',
      variable.nave1
    ).then(res => {
      console.log(res.data);
    }
    ).catch(err => console.log(err))

    axios.post('http://localhost:8080/addnave',
      variable.nave2
    ).then(res => {
      console.log(res.data);
    }
    ).catch(err => console.log(err))

    axios.post('http://localhost:8080/addnave',
      variable.nave3
    ).then(res => {
      console.log(res.data);
    }
    ).catch(err => console.log(err))

    axios.post('http://localhost:8080/addnave',
      variable.nave4
    ).then(res => {
      console.log(res.data);
    }
    ).catch(err => console.log(err))

    axios.post('http://localhost:8080/addnave',
      variable.nave5
    ).then(res => {
      console.log(res.data);
    }
    ).catch(err => console.log(err))

    axios.post('http://localhost:8080/addnave',
      variable.nave6
    ).then(res => {
      console.log(res.data);
    }
    ).catch(err => console.log(err))

    axios.post('http://localhost:8080/addnave',
      variable.nave7
    ).then(res => {
      console.log(res.data);
    }
    ).catch(err => console.log(err))

    axios.post('http://localhost:8080/addnave',
      variable.nave8
    ).then(res => {
      console.log(res.data);
    }
    ).catch(err => console.log(err))

    axios.post('http://localhost:8080/addnave',
      variable.nave9
    ).then(res => {
      console.log(res.data);
    }
    ).catch(err => console.log(err))

  }

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
      duracionYear: document.getElementById("NavTrip duracionYear").value

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
      potencia: document.getElementById("NavLanz potencia").value,
      reuttilizable: document.getElementById("NavLanz reusable").value
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


  //Consultar naves lanzadoras
  const getNavesLanz = async (e) => {
    const navesLanz = []
    e.preventDefault()

    axios.get('http://localhost:8080/allNaves'
    ).then(response => {
      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].tipoNave === 3) {
          const nave_ = response.data[i]

          for (const key in nave_) {
            if (nave_[key] === null) { delete nave_[key] }
          }
          navesLanz.push(nave_)
        }
      }
      console.log(navesLanz)
      setNavesLanzList(navesLanz)
    }).catch(err => console.log(err))
  }

  //Consultar naves tripuladas
  const getNavesNoTrip = async (e) => {
    const navesTrip = []
    e.preventDefault()

    axios.get('http://localhost:8080/allNaves'
    ).then(response => {
      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].tipoNave === 1) {
          const nave_ = response.data[i]

          for (const key in nave_) {
            if (nave_[key] === null) { delete nave_[key] }
          }
          navesTrip.push(nave_)
        }
      }
      console.log(navesTrip)
      setNavesTripList(navesTrip)
    }).catch(err => console.log(err))
  }

  //Consultar naves no tripuladas
  const getNavesTrip = async (e) => {
    const navesNoTrip = []
    e.preventDefault()

    axios.get('http://localhost:8080/allNaves'
    ).then(response => {
      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].tipoNave === 2) {
          const nave_ = response.data[i]

          for (const key in nave_) {
            if (nave_[key] === null) { delete nave_[key] }
          }
          navesNoTrip.push(nave_)
        }
      }
      console.log(navesNoTrip)
      setNavesNoTripList(navesNoTrip)
    }).catch(err => console.log(err))
  }



  return (
    <div className="mainPage">

      <div className='form-container' >
        <h1 className='title'>Agregar Naves</h1>
        <form className='form'
        >
          <div className='variable' id='variables-form'>
            <label className="label">
              Nave Lanzadora</label>
            <input
              className='value'
              id='NavLanz nombre'
              placeholder='Nombre'
            />
            <input
              className='value'
              id='NavLanz peso'
              placeholder='Peso'
            />
            <input
              className='value'
              id='NavLanz altura'
              placeholder='Altura'
            />
            <input
              className='value'
              id='NavLanz combustible'
              placeholder='Combustible'
            />
            <input
              className='value'
              id='NavLanz mision'
              placeholder='Misión'
            />
            <input
              className='value'
              id='NavLanz carga'
              placeholder='Carga'
            />
            <input
              className='value'
              id='NavLanz empuje'
              placeholder='Empuje'
            />
            <input
              className='value'
              id='NavLanz potencia'
              placeholder='Potencia'
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
            />
            <input
              className='value'
              id='NavTrip peso'
              placeholder='Peso'
            />
            <input
              className='value'
              id='NavTrip altura'
              placeholder='Altura'
            />
            <input
              className='value'
              id='NavTrip combustible'
              placeholder='Combustible'
            />
            <input
              className='value'
              id='NavTrip mision'
              placeholder='Misión'
            />
            <input
              className='value'
              id='NavTrip capacidad'
              placeholder='Capacidad'
            />
            <input
              className='value'
              id='NavTrip duracionMonth'
              placeholder='Duración meses'
            />
            <input
              className='value'
              id='NavTrip duracionYear'
              placeholder='Duración años'
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
            />
            <input
              className='value'
              id='NavNoTrip peso'
              placeholder='Peso'
            />
            <input
              className='value'
              id='NavNoTrip altura'
              placeholder='Altura'
            />
            <input
              className='value'
              id='NavNoTrip combustible'
              placeholder='Combustible'
            />
            <input
              className='value'
              id='NavNoTrip mision'
              placeholder='Misión'
            />
            <input
              className='value'
              id='NavNoTrip destino'
              placeholder='Destino'
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

        <button className='userInputForm-but'
          id='submitButton'
          type="submit"
          onClick={postInitialData}>
          Inicializar base de datos
        </button>
      </div>








      {/*Consulta naves lanzadoras */}
      <div className='results-container'>
        <h1 className='title'>Naves Lanzadoras</h1>
        <button className='userGetForm-but'
          id='getButton'
          onClick={getNavesLanz}>
          Consultar Naves
        </button>
        <div className='results'>
          <table className='table' id='table'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Peso[ton]</th>
                <th>Altura[m]</th>
                <th>Combustible</th>
                <th>Misión</th>
                <th>Carga [t]</th>
                <th>Empuje [t]</th>
                <th>Potencia[cab]</th>
              </tr>
            </thead>
            <tbody>
              {navesLanzList.map((nave__) => (
                <tr>
                  <td>{nave__.nombre}</td>
                  <td>{nave__.peso}</td>
                  <td>{nave__.altura}</td>
                  <td>{nave__.combustible}</td>
                  <td>{nave__.mision}</td>
                  <td>{nave__.carga}</td>
                  <td>{nave__.empuje}</td>
                  <td>{nave__.potencia}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>


      {/*Consulta naves no tripuladas */}
      <div className='results-container'>
        <h1 className='title'>Naves No Tripuladas</h1>
        <button className='userGetForm-but'
          id='getButton'
          onClick={getNavesNoTrip}>
          Consultar Naves
        </button>
        <div className='results'>
          <table className='table' id='table'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Peso [t]</th>
                <th>Altura [m]</th>
                <th>Combustible</th>
                <th>Misión</th>
                <th>Destino</th>
              </tr>
            </thead>
            <tbody>
              {navesTripList.map((nave__) => (
                <tr>
                  <td>{nave__.nombre}</td>
                  <td>{nave__.peso}</td>
                  <td>{nave__.altura}</td>
                  <td>{nave__.combustible}</td>
                  <td>{nave__.mision}</td>
                  <td>{nave__.destino}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/*Consulta naves tripuladas */}
      <div className='results-container'>
        <h1 className='title'>Naves Tripuladas</h1>
        <button className='userGetForm-but'
          id='getButton'
          onClick={getNavesTrip}>
          Consultar Naves
        </button>
        <div className='results'>
          <table className='table' id='table'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Peso [t]</th>
                <th>Altura [m]</th>
                <th>Combustible</th>
                <th>Misión</th>
                <th>Capacidad</th>
                <th>Meses</th>
                <th>Años</th>
              </tr>
            </thead>
            <tbody>
              {navesNoTripList.map((nave__) => (
                <tr>
                  <td>{nave__.nombre}</td>
                  <td>{nave__.peso}</td>
                  <td>{nave__.altura}</td>
                  <td>{nave__.combustible}</td>
                  <td>{nave__.mision}</td>
                  <td>{nave__.capacidad}</td>
                  <td>{nave__.duracionMouth}</td>
                  <td>{nave__.duracionYear}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  )
}

export default NavesSofka;

