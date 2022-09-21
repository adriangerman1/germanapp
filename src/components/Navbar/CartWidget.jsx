import React, { useContext } from "react";
import CardItem from "./CardItem";
import {Context} from "../../context/CardContext"

const CartWidget = () => {

    const { card, clear } = useContext(Context)


    return (
        <>
            {card.map(element =><CardItem item={element}/>)}
            <button className="btn btn-danger" onClick={clear}>Borrar Carrito</button>
        </>
    )
}

export default CartWidget;