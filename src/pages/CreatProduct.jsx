import { useState } from "react";
import Header from "../componentes/Header";
import { useCadastro } from "../contexts/ThemeContext";

export default function CreateProduct() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [quant, setQuant] = useState("");
  const [description, setDescription] = useState("")
  const {adicionarProduto, products} = useCadastro()
  
  
  const getNextId = () => {
    // Gera um ID único baseado no comprimento da lista de produtos
    return products.length + 1;
  };

  const cadastrar = () => {
    if (!name || !value || !quant) {
      alert("Por favor, preencha todos os campos");
    }else{

    const novoProduto = {
      nome: name,
      valor: value,
      quantidade: quant,
      descricao: description,
      id: getNextId()
    };

    adicionarProduto(novoProduto)

    // Limpa os campos de entrada após o cadastro
    setName("");
    setValue("");
    setQuant("");
    setDescription("")

  }
  };

  return (
    <>
      <Header />

      <section className="cadastro-content">
        <h1>Cadastrar Produto</h1>
        <div className="form">
          <div className="label-input">
            <label htmlFor="">Nome do produto</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="label-input">
            <label htmlFor="">Valor</label>
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
          <button className="submit" onClick={cadastrar}>
            Cadastrar
          </button>
        </div>
      </section>
    </>
  );
}
