import { useEffect, useState, useRef } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

const App = () => {
  const [produtos, setProdutos] = useState([]);           //- aqui ele grava a ultima mudança e atualiza se tiferente - lista exibida na tela
  const [todosProdutos, setTodosProdutos] = useState([]); // - Lista da Fakestore 
  const ultimaCategoria = useRef("All");

  function buscarProdutos() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => {
        setProdutos(response);
        setTodosProdutos(response);
      });
  }

  function filtrarProdutos(categoria) {
    // se clicou na mesma categoria de antes, não faz nada
    if (categoria === ultimaCategoria.current) return;

    ultimaCategoria.current = categoria;

    if (categoria !== "All") {
      const produtosFiltrados = todosProdutos.filter(
        (produto) => produto.category === categoria.toLowerCase()
      );
      setProdutos(produtosFiltrados);
    } else {
      setProdutos(todosProdutos);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  function ordenarProdutos(criterio) {
  if (criterio === "All") {
    // volta à ordem original, mantendo a categoria escolhida
    const categoria = ultimaCategoria.current;
    if (categoria === "All") {
      setProdutos(todosProdutos);
    } else {
      setProdutos(
        todosProdutos.filter(
          (produto) => produto.category === categoria.toLowerCase()
        )
      );
    }
    return;
  }

  const produtosOrdenados = [...produtos];

  if (criterio === "preco") {
    produtosOrdenados.sort((a, b) => a.price - b.price);
  } else if (criterio === "nota") {
    produtosOrdenados.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  setProdutos(produtosOrdenados); // é isso que atualiza a tela
}
  return (
    <>
      <Header filtrarProdutos={filtrarProdutos} ordenarProdutos={ordenarProdutos} />
      <main className="p-15 bg-slate-100">
        <div className="grid grid-cols-4 gap-4">
          {produtos.map((produto) => (
            <Card
              key={produto.id}
              title={produto.title}
              image={produto.image}
              category={produto.category}
              rate={produto.rating.rate}
              price={produto.price}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default App;