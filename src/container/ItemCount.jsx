import { useState, } from "react"


// const ItemCount = ({ stock, initial }) => {
const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial)

    const addNumber = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const restNumber = () => {
        if (count >= 1) {
            setCount(count - 1)
        }
    }

    return (
        
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 text-center"> 
                    <button className="btn btn-outline-success" onClick={ addNumber}> + </button>
                    <div className="text-center h3"> {count}</div>
                    <button className="btn btn-outline-danger" onClick={restNumber}> - </button>
                </div>
            </div>
            <button className="btn btn-primary m-2" onClick={() => onAdd(count)}>Agregar producto</button>
        </div>       
    )   
}


export default ItemCount