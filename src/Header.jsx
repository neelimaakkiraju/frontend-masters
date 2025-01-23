import { cartContext } from "./contexts";
import { useContext } from "react";
import { Link } from "@tanstack/react-router";

export default function Header() {
  const [cart] = useContext(cartContext);
  return (
    <nav>
      <Link>
        <h1 className="logo">Padri Gino's</h1>
      </Link>
      <div className="nav-cart">
        🛒<span className="nav-cart-number">{cart.length}</span>
      </div>
    </nav>
  );
}
