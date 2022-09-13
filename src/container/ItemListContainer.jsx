import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [products, setproducts] = useState([])

        useEffect(() => {
            setTimeout(async () =>{
                const response = await fetch("/data.json")
                const data = await response.json()
                
                setproducts(data)
        }, 2000)
    },[])

    return(

        <div className="container-fluid">
            
            <ItemList products={products}/>

        </div>
    )
}

export default ItemListContainer;

