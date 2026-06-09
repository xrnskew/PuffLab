function ProductCard({ name, price, image, quantity, onAdd, onRemove }) {
  return (
    <div className="flex flex-col items-center gap-2.5 p-5 bg-zinc-900 border border-zinc-800 rounded-xl transition-all duration-200 hover:border-zinc-400 hover:-translate-y-0.75 hover:shadow-lg hover:shadow-white/30">
      <h3 className="m-0 text-sm font-medium tracking-widest uppercase">{name}</h3>
      <img src={image} alt={name} className="w-full aspect-square object-cover rounded-lg border border-zinc-800" />
      <p className="m-0 font-mono text-sm text-zinc-100">${price}</p>
      <div className="flex items-center gap-3.5">
        <button
          onClick={onRemove}
          className="w-8 h-8 flex items-center justify-center bg-transparent border border-zinc-800 rounded-lg text-zinc-300 leading-none transition-colors duration-150 hover:border-zinc-400 hover:text-zinc-100"
        >−</button>
        <span className="min-w-6 text-center font-mono text-sm text-zinc-500">{quantity}</span>
        <button
          onClick={onAdd}
          className="w-8 h-8 flex items-center justify-center bg-transparent border border-zinc-800 rounded-lg text-zinc-300 leading-none transition-colors duration-150 hover:border-zinc-400 hover:text-zinc-100"
        >+</button>
      </div>
    </div>
  )
}

export default ProductCard
