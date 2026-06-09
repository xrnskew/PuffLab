import { useState } from "react";
import ProductCard from '../../components/ProductCard/ProductCard';

function Home({products, addToCart, removeFromCart, cart}) {

  const [view, setView] = useState("default")

  let sorted = []
  switch(view) {
    case "price-asc":  sorted = [...products].sort((a, b) => a.price - b.price); break;
    case "price-desc": sorted = [...products].sort((a, b) => b.price - a.price); break;
    default:           sorted = [...products]; break;
  }

  const sortBtnCls = (mode) =>
    `bg-transparent rounded-full text-xs tracking-widest uppercase py-2 px-4.5 border transition-colors duration-150 ${
      view === mode
        ? 'text-zinc-100 border-zinc-600 bg-zinc-800/60'
        : 'text-zinc-500 border-zinc-800 hover:text-zinc-300 hover:border-zinc-600'
    }`;

  return (
    <div>
      <div className="flex gap-2.5 mb-7">
        <button
          className={sortBtnCls('price-asc')}
          onClick={() => setView(view === 'price-asc' ? 'default' : 'price-asc')}
        >
          Price ↑
        </button>
        <button
          className={sortBtnCls('price-desc')}
          onClick={() => setView(view === 'price-desc' ? 'default' : 'price-desc')}
        >
          Price ↓
        </button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5">
        {sorted.map((product) => {
          const itemInCart = cart.find(item => item.id === product.id)
          const quantity = itemInCart ? itemInCart.quantity : 0
          return (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              quantity={quantity}
              onAdd={() => addToCart(product.id)}
              onRemove={() => removeFromCart(product.id)}
            />
          )
        })}
      </div>
    </div>
  );
}

export default Home;
