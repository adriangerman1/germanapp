import React, { createContext, useState } from "react"

export const Context = createContext()

const CardContext = ({children}) =>{

    const [card, setCard] = useState([])

    const clear =() =>{
        setCard([])
    }

    const removeItem = (itemId) =>{
        setCard(card.filter((e)=> e.id !== itemId))
    }

    const isInCart = (id) => {
        return card.find((e) => e.id === id)
    }

    const addItem = (item,quantity) => {
        const productAux = isInCart(item.id)

        if (productAux){
            const arreglo = card.filter(e => e.id !== item.id)
            item.quantity = quantity + productAux.quantity
            arreglo.push(item)
            setCard(arreglo)
        }else{
            item.quantity = quantity
            setCard([...card,item])
        }
        
    }

    return(
        <Context.Provider value={{addItem,card,removeItem,clear}}>
            {children} 
        </Context.Provider>
    )
}

export default CardContext