import "./Secciones.css"

export default function Secciones({nombre1,nombre2,nombre3}){

function handleClick(nombre){
    console.log(`Ingresaste a la seccion ${nombre}`);
}

    return(
        <>
           <div className="container mt-Personalizado">

                <div style={{width: 600}} className="row d-flex justify-content-center">

                    <div className="col-4" onClick={() => handleClick(nombre1)}>
                        <h3>{nombre1}</h3>
                    </div>

                    <div className="col-2" onClick={() => handleClick(nombre2)}>
                        <h3>{nombre2}</h3>
                    </div>

                    <div className="col-3" onClick={() => handleClick(nombre3)}>
                        <h3>{nombre3}</h3>
                    </div>
                </div>

            </div>
        </>
    )

}