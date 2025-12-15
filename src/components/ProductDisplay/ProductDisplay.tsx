import type { ProductDisplayProps } from '../../types/index';

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = false,
  showStockStatus = false,
  onAddToCart,
  children
}) => {
  return (
    <div className="border rounded-xl shadow p-4">
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-40 object-cover rounded mb-3"
        />
      )}

      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-lg">${product.price.toFixed(2)}</p>

      {showDescription && (
        <p className="text-gray-600 mt-2">{product.description}</p>
      )}

      {showStockStatus && (
        <p className={product.inStock ? 'text-green-600' : 'text-red-600'}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      )}

      {children}

      {onAddToCart && (
        <button
          onClick={() => onAddToCart(product.id)}
          className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};