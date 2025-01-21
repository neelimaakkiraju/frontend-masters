import { cartContext } from "./contexts"
import { useContext } from "react"



export default function Header(){
    const [cart] = useContext(cartContext)
    return(
        <nav>
            <h1 className="logo">
                Padri Gino's
            </h1>
            <div className="nav-cart">
                🛒<span className="nav-cart-number">{cart.length}</span>
            </div>
        </nav>

    )
}