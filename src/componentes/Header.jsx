import { Link } from "react-router-dom"

const Header = () =>{
    return(
        <header>
            <Link to= "/">Estoque</Link>
            <nav>
               <Link to= "/criar">Cadastrar item</Link> 
               <Link to= "/sobre">Sobre</Link>
            </nav>
        </header>
    )
}
export default Header