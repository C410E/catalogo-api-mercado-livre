import { Link } from "react-router-dom"

import "./header.css"


const Header = () => {
    return(
        <div className="header-area">
           <Link to="/">Store</Link>
           <Link to="/cart">cart</Link>
        </div>
    )
}

export default Header;