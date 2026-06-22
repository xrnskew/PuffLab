import { Link } from "react-router-dom";

function ProductModal({ product, onClose, addToCart, removeFromCart, cart }) {

  const inCart = cart.find(item => item.id === product.id)

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div onClick={(e) => e.stopPropagation()} className="relative flex flex-col md:flex-row gap-8 w-full max-w-2xl mx-4 bg-zinc-900 border border-zinc-800 rounded-xl p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl leading-none text-zinc-500 transition hover:text-zinc-200"
        >
          ×
        </button>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full md:w-72 aspect-square object-cover rounded-lg border border-zinc-800"
        />
        <div className="flex flex-col gap-4 max-w-sm">
          <h3 className="m-0 text-2xl font-medium tracking-widest uppercase text-zinc-100">{product.name}</h3>
          <p className="m-0 font-mono text-lg text-zinc-200">${product.price}</p>
          <p className="m-0 text-sm text-zinc-400">{product.description}</p>
          <div className="flex flex-col gap-3 mt-4 md:mt-12">
            {inCart ? (
              <div className="flex items-center w-full h-10 border border-zinc-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => removeFromCart(product.id)}
                  className={`flex-1 h-full flex items-center justify-center text-lg transition-colors ${
                    inCart.quantity === 1
                      ? 'text-red-500/60 hover:text-red-400 hover:bg-red-950/40'
                      : 'text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800'
                  }`}
                >
                  {inCart.quantity === 1 ? '×' : '−'}
                </button>
                <span className="flex-1 text-center font-mono text-sm text-zinc-100 border-x border-zinc-700">{inCart.quantity}</span>
                <button onClick={() => addToCart(product.id)} className="flex-1 h-full flex items-center justify-center text-lg text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800 transition-colors">+</button>
              </div>
            ) : (
              <button onClick={() => addToCart(product.id)} className="w-full h-10 flex items-center justify-center border border-zinc-700 rounded-lg text-zinc-100 text-sm font-medium tracking-widest uppercase transition-colors hover:bg-zinc-800">
                Add to cart
              </button>
            )}
            <Link
              to={`/product/${product.id}`}
              onClick={onClose}
              className="text-center text-sm text-zinc-500 transition hover:text-zinc-300"
            >
              Подробнее →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
//