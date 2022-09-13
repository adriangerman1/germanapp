import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

const ItemDetail = ({ product }) => { 
    
    const [suma, setSuma] = useState([0])
    const [formError, setFormError] = useState(true)

    const onAdd = (quantityToAdd)=>{

        setSuma(quantityToAdd)
        setFormError(false)
        
    }

    return (
            <div className="row">

            <h3 className="text-start">Cantidad {suma}</h3>
            <div className="boxImage col-md-6">
                <img key={product.id} src={product.image} className="card-img-top rounded"  alt={product.title} width="10px" />
            </div>  
            
            <div className="boxInfo card-body col-md-6">
                <h3 className="card-title">{product.title}.</h3>
                <h5>Precio: ${product.price}.</h5>
                <h5>{product.screen}.</h5>
                <h5>{product.camera}.</h5>
                <h5>{product.processor}.</h5>
                <h5>{product.memory_limit}.</h5> 
                <h4>{formError ? <ItemCount stock={5} initial={0} onAdd={onAdd}/> : "Se agrego correctamente" }</h4>  
                <Link to={'/Cart'}>
                    <button className="btn btn-primary m-2">comprar producto</button>
                </Link>
            </div>
        </div>
    )
}

export default ItemDetail