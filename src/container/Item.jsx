const Item = ({product},{key}) => {

    return (
        <div className="row">

            <div className="col-md-6">
                
                
                <img key={key} src={product.image}  className="card-img-top" alt={product.title}/>

                <div className="card-body">
                        <h3 className="card-title">{product.title}</h3>
                        <h5>{product.title }</h5>
                        <h5>{product.price}</h5>
                        <h5>{product.screen}</h5>
                        <h5>{product.camera}</h5>
                        <h5>{product.processor}</h5>
                        <h5>{product.memory_limit}</h5>
                        
                    <button className="btn btn-primary m-2" onClick={() => {}}>Ver los detalles del producto</button>

                </div>

            </div>

        </div>
    )
}

export default Item