import "./NavBar.css"
import Titulo from "./Titulo"
import Secciones from "./Secciones"
import Carrito from "./CartWidget"

export default function NavBar(){
    return (
        <> 
        <div className="container-fluid" >
        <div  className="row">
            <div className="col-2">
                <Titulo/>
            </div>
        
            <div className="col">
                <Secciones nombre1="Hombres" nombre2="Mujer" nombre3="Niños"/>
            </div>

            <div className="col me-5 mt-1">
                <div className="cart-container">
                    <Carrito/>   
                </div>
            </div>

        </div>
        </div>
        </> 
    )
}