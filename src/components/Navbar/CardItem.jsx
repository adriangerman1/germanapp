import { useContext } from "react"
import { Context } from "../../context/CardContext"

const CardItem=({item}) => {
    
    const {removeItem} = useContext(Context)

    const borrar = () => {
        removeItem(item.id)
    }

    return (
    <>  
        <h2>Producto: {item.title} - Cantidad: {item.quantity} </h2>
        <button className="btn btn-primary" onClick={borrar}>Borrar</button>
    </> 
    )
}

export default CardItem