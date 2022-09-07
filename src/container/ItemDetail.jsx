const ItemDetail = ({ product }) => {

    return (

        <div className="row">

            <div className="boxImage col-md-6">

            <img key={product.id} src={product.image} className="card-img-top rounded"  alt={product.title} width="10px" />
            
            </div>
                

            <div className="boxInfo card-body col-md-6">
                <h3 className="card-title">{product.title}.</h3>
                <h5>Precio: ${product.price}.</h5>
                <h5>{product.screen}.</h5>
                <h5>{product.camera}.</h5>
                <h5>{product.processor}.</h5>
                <h5>{product.memory_limit}.</h5>

                <button className="btn btn-primary m-2" onClick={() => { }}>comprar producto</button>

            </div>

        </div>

    )

}

export default ItemDetail