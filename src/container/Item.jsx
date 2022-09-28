import { Link } from "react-router-dom"

const Item = ({product},{key}) => {
    
    return (
        <div key={product.id} className="col-md-4">
            <div className="card-content" >
                <img src={product.image} className="card-img-top" alt={product.title}/>
                <div className="card-body">
                    <h3 className="card-title">{product.title}</h3>
                    <h5>Precio: ${product.price}</h5>
                    <Link to={`/Item/${product.id}`}>
                        <button className="btn btn-primary m-2">Ver los producto</button>
                    </Link>        
                </div>
            </div>
        </div>
    )
}

export default Item