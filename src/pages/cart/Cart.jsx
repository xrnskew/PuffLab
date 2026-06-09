import ProductCard from '../../components/ProductCard/ProductCard';

function Cart({products, addToCart, removeFromCart, cart}) {

  if (cart.length === 0) return (
    <p className="font-mono text-xs tracking-widest uppercase text-zinc-500">
      <span className="text-zinc-100">[ </span>Cart is empty<span className="text-zinc-100"> ]</span>
    </p>
  )

  const total = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id)
    return sum + product.price * item.quantity
  }, 0)

  return (
    <div>
      <div className="inline-flex items-baseline gap-2.5 mb-7 py-3.5 px-5.5 bg-zinc-900 border border-zinc-800 rounded-full font-mono">
        <span className="text-xs tracking-widest uppercase text-zinc-500">Total</span>
        <span className="text-lg text-zinc-100">${total}</span>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5">
        {cart.map((item) => {
          const product = products.find(p => p.id === item.id)
          return (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              quantity={item.quantity}
              onAdd={() => addToCart(product.id)}
              onRemove={() => removeFromCart(product.id)}
            />
          )
        })}
      </div>
    </div>
  );
}

export default Cart;
