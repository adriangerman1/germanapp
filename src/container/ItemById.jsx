import { useState,useEffect } from "react"
import { getFirestore,getDocs, collection } from 'firebase/firestore'

const ItemById = () => {
    
    const [products, setProducts] = useState([])
    
    useEffect(() =>{

        const db = getFirestore()
        const items = collection(db, "items")
        getDocs(items).then((snapshot) => {
            console.log(snapshot.docs)

            const docs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setProducts(docs)
        }) 
    },[])

    return (

        <div>

            <h2>Todos los Items</h2>
            {products.length === 0 ? 
                (<div>Cargando...</div>) 
                :(
                    <div>
                        <ul>
                            {products.map((product) => (
                                <li key={product.id}>{product.title} - {product.price}</li>
                                
                            ))}
                        </ul>
                    </div>)
            }

        </div> 
    )

}

export default ItemById
