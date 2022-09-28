import {useState,useContext} from "react"
import { Context } from "../context/CardContext"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"


const ItemDetail = ({ product }) => { 
    
    const [suma, setSuma] = useState([0])
    const {addItem} = useContext(Context)

    const onAdd = (quantityToAdd)=>{
        addItem(product,quantityToAdd)
        setSuma(quantityToAdd) 
    }
    
    return (
            <div className="row">
                <div className="boxImage col-md-6">
                    <img key={product.id} src={product.image} className="card-img-top rounded"  alt={product.title} width="10px" />
                </div>  
                
                <div className="boxInfo card-body col-md-6">
                    <h3 className="card-title">{product.title}.</h3>
                    <h5>Precio: ${product.price}.</h5>
                    <h5>Pantalla: {product.screen}.</h5>
                    <h5>Camaras: {product.camera}.</h5>
                    <h5>Procesador: {product.processor}.</h5>
                    <h5>Memoria: {product.memory_limit}GB.</h5> 
                    <h5>Memoria ram: {product.ram}GB.</h5> 
                    <h4><ItemCount stock={10} initial={0} onAdd={onAdd}/></h4>  
                    {/* <Link to={'/Cart'}>
                        <button className="btn btn-primary m-2">comprar producto</button>
                    </Link> */}
                    
                </div>
        </div>
    )
}

export default ItemDetail