import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../componentes/Header";
import { useCadastro } from "../contexts/ThemeContext";

export default function Produto() {
 const navigate = useNavigate()
  const { getProduct } = useCadastro();
  const { id } = useParams();
  const {deleteProduct} = useCadastro()
  const product = getProduct(id);
 
  function handleDelete(id){
    if (window.confirm("Deseja mesmo excluir o produto?")) {
        deleteProduct(id);
        navigate("/")
      }
    };
  
  if (!product) {
    return (
      <>
        <Header />
        <section className="cadastro-content">
          <h1>Produto não encontrado</h1>
        </section>
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="cadastro-content">
        <h1>{product.nome}</h1>
        <h4>Preço: {product.valor} reais</h4>
        <p>Quantidade: {product.quantidade}</p>
        <div className="btns">
          <Link to={`/editar/${id}`}><button className="btn-editar">Editar</button></Link>
          <button className="btn-excluir" onClick={() => handleDelete(id)}>Excluir</button>
        </div>
      </section>
    </>
  );
}
