import { createContext, useContext, useState } from "react";


export const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{
    const [products, setAddProducts] = useState([]);

  const adicionarProduto = (novoProduto) => {
    setAddProducts((cadastroAnterior) => [...cadastroAnterior, novoProduto]);
  }
    const getProduct = (id) =>{
     return products.find(p => p.id.toString() === id);
    }

    const deleteProduct = (id) => {
        setAddProducts(cadastroAnterior => cadastroAnterior.filter(product => product.id != id))
    }
    
    const editProduct = (id,novoProduto) =>{
      setAddProducts(produtoAnterior => produtoAnterior.map((p) => p.id == id ? {...p, ...novoProduto} : p)
      )
    }
    return(
       <ThemeContext.Provider value = {{products, adicionarProduto, getProduct, deleteProduct, editProduct}}>
        {children}
       </ThemeContext.Provider>

    )
}

export function useCadastro() {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error("useCadastro deve ser utilizado dentro de um CadastroProvider");
    }
    return context;
  }