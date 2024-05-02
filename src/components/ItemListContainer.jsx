export default function ItemListContainer({greeting}){
    return (<>
         <div className="card" style={{ width: '18rem' }}>
                <img src="imgProductos/zapatillaAdifomQ.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">{greeting}</p>
                </div>
            </div> 
    </> 
    )
}

