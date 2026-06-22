import { useState, useMemo } from "react";
import ProductCard from '../../components/productCard/ProductCard';
import ProductModal from '../../components/productModal/ProductModal';
import MainBanner from '../../assets/banners/B1-Main.png';

function Home({products, addToCart, removeFromCart, cart}) {

  const [view, setView] = useState("default")
  const [openProduct, setOpenProduct] = useState(null)

  const shuffled = useMemo(() => {
    return [...products].sort(() => Math.random() - 0.5)
  }, [])

  let sorted = []
  switch(view) {
    case "price-asc":  sorted = [...products].sort((a, b) => a.price - b.price); break;
    case "price-desc": sorted = [...products].sort((a, b) => b.price - a.price); break;
    default:           sorted = shuffled; break;
  }

  const sortBtnCls = (mode) =>
    `bg-transparent rounded-full text-xs tracking-widest uppercase py-2 px-4.5 border transition-colors duration-150 ${
      view === mode
        ? 'text-zinc-100 border-zinc-600 bg-zinc-800/60'
        : 'text-zinc-500 border-zinc-800 hover:text-zinc-300 hover:border-zinc-600'
    }`;

  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full mb-10 overflow-hidden rounded-xl border border-zinc-800 group">
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent z-10" />
        <img 
          src={MainBanner} 
          alt="Main Banner" 
          className="w-full h-72 md:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-100 tracking-widest uppercase mb-3 md:mb-4">
            Main Collection
          </h2>
          <p className="text-zinc-300 text-base md:text-lg mb-6 max-w-lg leading-relaxed">
            Premium puffer jackets with unique textures 
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => {
                const grid = document.querySelector('.grid')
                grid?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="inline-block py-3.5 px-8 rounded-full bg-zinc-100 text-zinc-900 text-sm font-medium tracking-widest uppercase transition hover:bg-zinc-300"
            >
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Sort Buttons */}
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

      {/* Products Grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5">
        {sorted.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              onOpen={() => setOpenProduct(product)}
            />
          )
        })}
      </div>

      {/* Product Modal */}
      {openProduct && (
        <ProductModal
          product={openProduct}
          onClose={() => setOpenProduct(null)}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          cart={cart}
        />
      )}
    </div>
  );
}

export default Home;