import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    let productId = useParams();
    productId=productId.id-1
    const [product, setproducts] = useState([])

        useEffect(() => {
            setTimeout(async () =>{
                const response = await fetch("/data.json")
                const data = await response.json()

                setproducts(data[productId])
        }, 2000)
    },[])

    return(

        <div className="container-fluid">
            <ItemDetail product={product}/>
        </div>
            )
}

export default ItemDetailContainer