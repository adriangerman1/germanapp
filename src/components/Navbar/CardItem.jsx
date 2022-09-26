import { useContext } from "react"
import { Context } from "../../context/CardContext"

const CardItem=({item}) => {
    
    const {removeItem} = useContext(Context)

    const borrar = () => {
        removeItem(item.id)
    }

    return (
        <>  
            <h4 key={item.id}>Producto: {item.title} - Cantidad: {item.quantity} - Precio: ${item.price} </h4>
            <button className="btn btn-primary" onClick={borrar}>Borrar</button>
        </> 
    )
}

export default CardItem