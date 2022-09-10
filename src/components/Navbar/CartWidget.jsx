import { Link } from "react-router-dom";

const CartWidget = () => {

    return (
        <Link to="/CartWidget" >
            <button type="button" className="btn btn-success position-relative"><i className="ri-shopping-cart-line"/><span className="position-absolute top-0 start-100 translate-middle badge text-bg-success">0<span className="visually-hidden">unread messages</span></span></button>
        </Link>
        ) 
}

export default CartWidget;