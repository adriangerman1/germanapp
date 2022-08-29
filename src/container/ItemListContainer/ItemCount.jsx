import { useState, } from "react"

const ItemCount = () => {
    
    const [carrito, setCarrito] = useState(["producto"]);
    
    const sumar=() => {
        setCarrito([...carrito,"producto"])
        console.log(carrito)
    }

    const restar=() => {
        if(carrito.length > 1) {
            
            // setCarrito([...carrito.splice((carrito.length-1),1)])
            // setCarrito([carrito.splice((carrito.length-1),1)])
            // setCarrito.splice(carrito.length-1,1)
            
            carrito.splice(carrito.length-1,1)
            setCarrito(carrito)
            console.log(carrito)
        }
    }

    return (

        <div className="container-fluid">
            

            <div className="row m-2">

                <button className="col-md-4 btn btn-outline-success " onClick={() => sumar()}> Sumar </button>

                    <div className="col-md-4 text-center h3">
                    El carrito tiene {carrito.length} productos
                    </div>

                <button className="col-md-4 btn btn-outline-danger" onClick={() => restar() }> Restar </button>

            </div>
        </div>
    )

}

export default ItemCount