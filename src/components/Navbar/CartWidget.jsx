import React, { useContext, useState } from "react";
import CardItem from "./CardItem";
import {Context} from "../../context/CardContext"
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CartWidget = () => {

    const {card, clear, Total} = useContext(Context)
    const [precioTotal, setPrecioTotal] = useState(0)

    useEffect(() => {
        setPrecioTotal(Total())
    },[card])

    return (
        <>  
            <div>
                <h2>{card.length == 0 ? 'No se encuentra productos en el carrito' : '' }</h2>
                <Link to={'/category/:id'}>
                    <button className="btn btn-primary m-2">comprar producto</button>
                </Link> 
            </div>

            {card.map(element =><CardItem item={element}/>)}
            <button className="btn btn-danger" onClick={clear}>Borrar Carrito</button>
            <h4>Total :${precioTotal}</h4>
        </>
    )
}

export default CartWidget;