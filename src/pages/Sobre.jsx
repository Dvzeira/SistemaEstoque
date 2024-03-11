import Header from "../componentes/Header";

export default function Sobre (){
    return(
        <>
        <Header/>
        <section className="cadastro-content">
         <h1>Sobre Mim</h1>
         <p>Meu nome é Davi Andrade da Silva. Trabalhei como Jovem Aprendiz na Renault e, 
            recentemente, fiz uma transição em minha carreira para a programação. Sou formado em Técnico em Ti e 
            Atualmente estou cursando Análise e Desenvolvimento de Sistema pela Uniasselvi. Minha especialidade inclui
            React, JavaScript, HTML, CSS e MySqL.
         </p>

         <h1>Sobre o Projeto</h1>
         <p>Esse é um Projeto de Estoque feito exxclusivamente com React. Nele é possível 
            adcionar, excluir, editar e visualizar produtos.
         </p>
        </section>
        </>
    )
}