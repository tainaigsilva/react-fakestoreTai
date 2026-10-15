const Header = ({ filtrarProdutos, ordenarProdutos, pesquisarProdutos }) => {
    return (
        <header className="flex items-center justify-between px-15 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-black">
            <a className="text-2xl font-bold text-white" href="">
                <img src="./src/assets/logo.png" alt="Logo" className="h-25 rounded-2xl" />
            </a>

            <input
                onChange={(e) => pesquisarProdutos(e.target.value)}
                type="text"
                placeholder="Digite o nome do produto"
                className="w-120 h-10 rounded bg-white pl-4"
            />

            <div className="flex items-center gap-2">
                <select
                    defaultValue=""
                    onChange={(e) => filtrarProdutos(e.target.value)}
                    className="h-10 rounded bg-white px-4"
                >
                    <option value="" disabled>Filtrar produtos</option>
                    <option value="All">Todos</option>
                    <option value="men's clothing">Roupas masculinas</option>
                    <option value="women's clothing">Roupas femininas</option>
                    <option value="electronics">Eletrônicos</option>
                    <option value="jewelery">Joias</option>
                </select>

                <select
                    defaultValue=""
                    onChange={(e) => ordenarProdutos(e.target.value)}
                    className="h-10 rounded bg-white px-4"
                >
                    <option value="" disabled>Ordenar produtos</option>
                    <option value="preco">Ordenar por Preço</option>
                    <option value="nota">Ordenar por Avaliação</option>
                    <option value="All">Remover Ordenação</option>
                </select>
            </div>
            <div>
               <a href="./carrinho.html"> <img src="./src/assets/carrinho.png" alt="Carrinho" className="h-25 rounded-2xl" /></a>
            </div>
        </header>
    );
};

export default Header;
