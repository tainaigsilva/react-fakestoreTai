const Header = ({ filtrarProdutos, ordenarProdutos }) => {
    return (
        <header className="flex items-center justify-between px-15 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-black">
            <div>
                <input
                    type="text"
                    placeholder="Digite o nome do produto"
                    className="w-120 h-10 rounded bg-white pl-4"
                />
            </div>
            <div>
                <select onChange={(e) => filtrarProdutos(e.target.value)} className="h-10 rounded bg-white px-4">
                    <option selected disabled>Filtrar produtos</option>
                    <option>All</option>
                    <option>Men's clothing</option>
                    <option>women's clothing</option>
                    <option>electronics</option>
                    <option>jewelery</option>
                </select>
                <select onChange={(e) => ordenarProdutos(e.target.value)} className="p-2 m-2 h-10 rounded bg-white px-4">
                    <option selected disabled>Ordenar produtos</option>
                    <option value="preco">Ordernar por Preço</option>
                    <option value="nota">Ordernar por Avaliação</option>
                    <option value="All">Remover Ordenação</option>
                </select>
            </div>
        </header>
    );
}

export default Header;