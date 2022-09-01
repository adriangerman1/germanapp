import { useState,useEffect } from "react";
import ItemList from "./ItemList";


const listProducts=[
    {
        "id": "1",
        "image":"https://http2.mlstatic.com/D_NQ_NP_2X_988597-MLA50693346006_072022-F.webp",
        "title": "Motorola Edge 30 128 Gb Gris 8 Gb Ram",
        "price": 89999,
        "screen":"Pantalla AMOLED de 6.5",
        "camera":"Tiene 3 cámaras traseras de 50Mpx/50Mpx/2Mpx. Cámara delantera de 32Mpx",
        "processor":"Procesador Snapdragon 778G+ 5G Octa-Core de 2.5GHz con 8GB de RAM",
        "memory_limit":"Memoria interna de 128GB"
    },
    {
        "id": "2",
        "image":"https://http2.mlstatic.com/D_NQ_NP_2X_922219-MLA48428094384_122021-F.webp",
        "title": "Samsung Galaxy A32 128 GB awesome black 4 GB RAM",
        "price": 75999,
        "screen":"Pantalla Super AMOLED de 6.4",
        "camera":"Tiene 4 cámaras traseras de 64Mpx/8Mpx/5Mpx/5Mpx. Cámara delantera de 20Mpx",
        "processor":"Procesador MediaTek Helio G80 Octa-Core de 2GHz con 4GB de RAM",
        "memory_limit":"Memoria interna de 128GB"
    },
    {
        "id": "3",
        "image":"https://http2.mlstatic.com/D_NQ_NP_2X_757354-MLA50965914515_082022-F.webp",
        "title": "Xiaomi Redmi 9C NFC Dual SIM 32 GB amanecer naranja 2 GB RAM",
        "price": 45999,
        "screen":"Pantalla IPS de 6.53",
        "camera":"Tiene 2 cámaras traseras de 13Mpx/2Mpx. Cámara delantera de 5Mpx.",
        "processor":"Procesador MediaTek Helio G25 Octa-Core de 2.3GHz con 2GB de RAM",
        "memory_limit":"Memoria interna de 32GB"
    },
]

const getProducts = new Promise((resolve, reject) => {

    setTimeout(() =>{
        resolve(listProducts)
    },2000)
})

const ItemListContainer = ({greeting,color}) => {

    const [products, setproducts] = useState([])

    useEffect(() => {
        getProducts
        .then((data)=> {
            setproducts(data)
        })
    },[])

    return(
        <div>

            <p style={{color}}>{greeting}en coder </p>
            <ItemList products={products}/>

        </div>
    )
}

export default ItemListContainer;
