function CartItem({ product, quantity, onAdd, onRemove }) {
    const sku = `PL-S${String(product.id).padStart(2, '0')}`

    const stepper = (
        <div className="flex items-center shrink-0 border border-zinc-700 rounded-lg overflow-hidden">
            <button
                onClick={() => onRemove(product.id)}
                className={`w-8 h-8 flex items-center justify-center transition-colors ${
                    quantity === 1
                        ? 'text-red-500/60 hover:text-red-400 hover:bg-red-950/40'
                        : 'text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800'
                }`}
            >
                {quantity === 1 ? '×' : '−'}
            </button>
            <span className="w-8 text-center font-mono text-sm text-zinc-100 border-x border-zinc-700">{quantity}</span>
            <button onClick={() => onAdd(product.id)} className="w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800 transition-colors">+</button>
        </div>
    )

    const total = (
        <div className="flex flex-col items-end shrink-0 w-20">
            <span className="font-mono text-base text-zinc-100">${(quantity * product.price).toFixed(2)}</span>
            <span className="text-[10px] tracking-widest uppercase text-zinc-600">// total</span>
        </div>
    )

    return (
        <div className="group p-4 bg-zinc-900 border border-zinc-800 rounded-xl transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-800/40">
            <div className="flex items-center gap-4">
                <div className="relative shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-zinc-800">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                </div>
                <div className="flex flex-col gap-0.5 grow min-w-0">
                    <h3 className="m-0 text-xs font-medium tracking-widest uppercase text-zinc-100 truncate">{product.name}</h3>
                    <span className="font-mono text-xs text-zinc-600">{sku}</span>
                </div>
                <div className="hidden md:flex items-center gap-6">
                    <div className="flex flex-col items-end shrink-0">
                        <span className="font-mono text-sm text-zinc-400">${product.price}</span>
                        <span className="text-[10px] tracking-widest uppercase text-zinc-600">each</span>
                    </div>
                    {stepper}
                    {total}
                </div>
            </div>
            <div className="flex md:hidden items-center justify-between mt-3 pt-3 border-t border-zinc-800/70">
                {stepper}
                {total}
            </div>

        </div>
    )
}

export default CartItem