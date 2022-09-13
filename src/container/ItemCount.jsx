import { useState, } from "react"

// const ItemCount = ({ stock, initial }) => {
const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial)

    const addNumber = () => {
        if (count < stock) {
            setCount(count + 1)
            onAdd(count+1)
            console.log(count)
        }
    }
    const restNumber = () => {
        if (count >= 1) {
            setCount(count - 1)
            onAdd(count-1)
            console.log(count)
        }
    }

    return (
        
           <div className="container-fluid">
            
            <div className="row m-2">
                <button className="col-md-4 btn btn-outline-success " onClick={ addNumber}> Sumar </button>
                <div className="col-md-4 text-center h3"> El carrito tiene {count} productos</div>
                <button className="col-md-4 btn btn-outline-danger" onClick={restNumber}> Restar </button>
            </div>
        </div>       
    )   
}


export default ItemCount