const Card = ({ title, image, rate, price, category }) => {
    return (
        <div className="p-15 bg-white rounded shadow-md" title={title}>
            <div className="relative">
                <img src={image} alt={title} className="w-full h-55 object-contain" />
                <div className="p-2 bg-purple-500 text-white absolute top-3 right-3 rounded"> {rate}
                </div>

            </div>
            <div className="p-2">
  <h2 className="text-xl font-semibold line-clamp-1">{title}</h2>
  <h6 className="font-semibold text-gray-600">{category}</h6>
  <p className="text-right text-2xl font-bold">R$ {price.toFixed(2)}</p>

  <div className="flex flex-col items-center gap-2 mt-2">
    <a
      href="https://dontpad.com/falelojinha"
      className="flex items-center justify-center gap-2 w-full bg-purple-500 text-white py-4 rounded hover:bg-purple-950"
    >
      <box-icon name="cart-add" color="white"></box-icon>
      Add ao Carrinho
    </a>

    <a
      href="https://dontpad.com/falelojinha"
      className="flex items-center justify-center w-full bg-purple-500 text-white py-4 rounded hover:bg-purple-950"
    >
      Compre Agora
    </a>
  </div>
</div>
        </div>
    );
}

export default Card;