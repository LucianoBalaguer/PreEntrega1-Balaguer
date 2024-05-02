import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Titulo from './components/Titulo'

function App() {

  return (
    <>

    
      
      <div className="position-absolute top-0 start-0" style={{ width: "100%", height: "100px", background:"#3c3c3c" }}>
        <div className='mt-3 col'>
          <NavBar />
        </div>
      </div>

      <ItemListContainer greeting="Bienvenida"/>
    
        

    </>
  )
}

export default App
