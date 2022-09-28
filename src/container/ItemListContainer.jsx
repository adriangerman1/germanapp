import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getFirestore,getDocs, collection } from 'firebase/firestore'

const ItemListContainer = () => {

    // const [products, setproducts] = useState([])

    //     useEffect(() => {
    //         setTimeout(async () =>{
    //             const response = await fetch("/data.json")
    //             const data = await response.json()
                
    //             setproducts(data)
    //     }, 2000)
    // },[])
    
    const [products, setProducts] = useState([])
    
    useEffect(() =>{

        const db = getFirestore()
        const items = collection(db, "items")
        getDocs(items).then((snapshot) => {
            // console.log(snapshot.docs)

            const docs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setProducts(docs)
        }) 
    },[])

    return(

        <div className="container-fluid">
            
            <ItemList products={products}/>

        </div>
    )
}

export default ItemListContainer;

