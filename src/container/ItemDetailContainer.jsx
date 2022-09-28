import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import {getFirestore, getDoc, doc} from 'firebase/firestore'

const ItemDetailContainer = () => {

    let productId = useParams();
    const [product, setProducts] = useState({})
    
    useEffect(() =>{
        if (productId.id){
            const db = getFirestore()
            const items = doc (db, "items", productId.id)
            getDoc(items).then((snapshot) => {
                // console.log(snapshot.id)
                // console.log(snapshot.data())
                const newDocs = {
                    id: snapshot.id,
                    ...snapshot.data()
                    
                }
                setProducts(newDocs)
            }) 
        }       
    }, [productId.id])
    
    //     useEffect(() => {
    //         setTimeout(async () =>{
    //             const response = await fetch("/data.json")
    //             const data = await response.json()

    //             setproducts(data[productId])
    //     }, 2000)
    // },[])
    // console.log(product)
    return(

        <div className="container-fluid">
            <ItemDetail product={product}/>
        </div>
            )
}

export default ItemDetailContainer