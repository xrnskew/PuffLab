import { Link } from "react-router-dom"

function ProductCard({ id, name, price, image, onOpen}) {
  return (
      <div onClick={onOpen} className="flex flex-col items-center gap-2.5 p-5 bg-zinc-900 border-2 border-zinc-800 rounded-xl transition-all duration-200 hover:border-2 hover:border-zinc-400 hover:-translate-y-0.75 hover:shadow-lg hover:shadow-white/30">
        <h3 className="m-0 text-sm font-medium tracking-widest uppercase">{name}</h3>
        <img src={image} alt={name} loading="lazy" className="w-full aspect-square object-cover rounded-lg border border-zinc-800" />
        <p className="m-0 font-mono text-sm text-zinc-100">${price}</p>
      </div>
  )
}

export default ProductCard
//