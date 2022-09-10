import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const Navbar = () => {

    return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link  to={"/"}>
                        <a className="navbar-brand"><img src="/logo192.png" width="40" height="40"/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link  to={"/"}>
                                    <a type="button" className="nav-link " aria-current="page" >Home</a>
                                </Link>    
                            </li>
                            <li className="nav-item">
                                <Link  to={"/category/:id"}>
                                    <a className="nav-link" >Products</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <CartWidget/>
                    </div>
                </div>
            </nav>
        
    )
}

export default Navbar

