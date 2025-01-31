import { cartContext } from "./contexts";
import { use } from "react";
import { Link } from "@tanstack/react-router";

export default function Header() {
  const [cart] = use(cartContext);
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
