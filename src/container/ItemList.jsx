
import React from 'react'
import Item from './Item';

const ItemList = ({products}) =>{

    return (

        <div className='container'>

            {products.map(product => {
                return <Item product={product} key={product.id} imagen={product.image}/>
            })}

        </div>
    )

}

export default ItemList;