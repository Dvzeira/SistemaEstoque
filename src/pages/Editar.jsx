import { useNavigate, useParams } from "react-router-dom"
import { useCadastro } from "../contexts/ThemeContext"
import { useState } from "react"
import Header from "../componentes/Header"

export default function Editar(){
    
    const {id} = useParams()
    const {getProduct} = useCadastro()
    const {editProduct} = useCadastro()
    const productEdit = getProduct(id)
    const [name, setName] = useState("");
    const [value, setValue] = useState("");
    const [quant, setQuant] = useState("");
    const [description, setDescription] = useState("")

    const navigate = useNavigate()


    const editar = () => {
        if (!name || !value || !quant) {
          alert("Por favor, preencha todos os campos");
        }else{
    
        const novoProduto = {
          nome: name,
          valor: value,
          quantidade: quant,
          descricao: description
        };
       
        editProduct(id, novoProduto)
        
     
        // Limpa os campos de entrada após o cadastro
        setName("");
        setValue("");
        setQuant("");
        setDescription("")  
        navigate("/")
        
    
      }
      };
    return(
        <> 
           <Header/>
           <section className="cadastro-content">
           {productEdit ? (
            <>
             <h1>{productEdit.nome}</h1> 
             <div className="form">
              <div className="label-input">
                  <label htmlFor="">Nome do produto</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="label-input">
                  <label htmlFor="">Preço</label>
                  <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
              </div>
              <div className="label-input">
                  <label htmlFor="">Quantidade</label>
                  <input type="text" value={quant} onChange={(e) => setQuant(e.target.value)} />
              </div>
              <div className="label-input">
            <label htmlFor="">Descrição</label>
            <textarea cols="30" rows="10" value={description} onChange={(e) => setDescription (e.target.value)}>
            </textarea>
          </div>
              <button className="submit" onClick={editar}>
                  Editar
              </button>
          </div>
          </> ):
          <p>Produto não encontrado</p>
          }
          
           </section>
        </>
    )
}