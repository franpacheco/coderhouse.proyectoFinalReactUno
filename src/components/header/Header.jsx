import { Carrito } from "../Carrito"
import { NavBar } from "./NavBar"

export const Header = () => {
  return (    
  <header className="header">
    <h1>AgusMr Store</h1>
    <NavBar/>
    <Carrito/>
  </header>
  )
}