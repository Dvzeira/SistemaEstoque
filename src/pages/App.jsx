import React from 'react';
import Header from '../componentes/Header';
import { useCadastro } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';

function App() {
  const { products } = useCadastro();
  console.log(products);

  return (
    <>
      <Header />
      <section className='cadastro-content'>
        <h1>Produtos</h1>
        <table className="product-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.nome}</td>
                <td>{product.valor}</td>
                <td>{product.quantidade}</td>
                <td>
                  <Link to = {`/produto/${index + 1}`}><button className='btn-ver'>Ver</button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default App;
