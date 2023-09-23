import {useFetchApi} from './Hooks/FetchApi';
import './App.css'

function App() {
  let url =`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_API_KEY}`;
  const {data,loading,error} = useFetchApi(url);

  return (
    <>
      <div className="title">
        <h2>useFetch - Custom Hook</h2>
      </div>
        <div className="title">
          <h4>Call NASA API: Picture of the day</h4>
        </div>
      <div className="row pt-4">
          {loading && <li>Carga: {(loading)?'Cargando':'Terminado'}</li>}
          {error && <li>Error: {error}</li>}
          {!loading && 
          <>
            <div className="row">
            <div className="col-lg-4">
                  <img className='img-fluid' src={data.url} alt={data.title}/>
            </div>
              <div className="col-lg-8">
                <div className="title-img text-center">
                  <h3>{data.title}</h3>
                </div>
                
                <div className="text-left">
                  {data.explanation}
                </div>
              </div>
            </div>
          </>
          }
      </div>
    </>
  )
}

export default App
