const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group">
      <div className="overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="group-hover:scale-105 transition-all duration-300"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300';
          }}
        />
      </div>

      <h3 className="mt-4 font-semibold">{product.name}</h3>

      <div className="flex text-yellow-400 mt-2">
        {"★".repeat(product.rating)}
      </div>

      <p className="mt-2 font-bold text-primary">
        ${product.price}.00
      </p>

      <button className="mt-3 w-full bg-primary text-white py-2 rounded-lg hover:scale-105 transition-all duration-300">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;