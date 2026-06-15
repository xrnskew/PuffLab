import { useParams, useNavigate, Link } from "react-router-dom";
import { useMemo } from "react";

import ProductCard from "../../components/ProductCard/ProductCard";

function Product({products, addToCart, removeFromCart, cart}) {

    const navigate = useNavigate()
    const { id } = useParams()
    const product = products.find(p => p.id === Number(id))

    const related = useMemo(() => {
        if (!product) return [] 
        return products.filter(p => p.id !== product.id).sort(() => Math.random() - 0.5).slice(0,4)
    }, [product?.id])

    if (!product) return <p>Product not found</p>

    const inCart = cart.find(item => item.id === product.id)

    const sku = `PL-S${String(product.id).padStart(2, '0')}`

    return (
        <div className="max-w-5xl mx-auto py-4">
            <div className="flex items-center gap-2">
                <Link to="/" className="text-lg text-zinc-500 transition hover:text-zinc-200 ">Home</Link>
                <span className="text-lg text-zinc-500">/</span>
                <span className="text-lg text-zinc-400">{product.name}</span>
            </div>
            <button onClick={() => navigate(-1)} className="mt-4 text-lg text-zinc-600 transition hover:text-zinc-400">← Back</button>

            <div className="flex flex-col md:flex-row gap-16 py-12">
                <img src={product.image} alt={product.name} loading="lazy" className="w-full max-w-md rounded-xl border border-zinc-800"/>
                <div className="flex flex-col gap-4 max-w-xl">
                    <h2 className="text-5xl text-zinc-100 tracking-widest uppercase">{product.name}</h2>
                    <p className="text-lg text-zinc-300">{product.description}</p>
                    <p className="text-2xl font-mono text-zinc-200">${product.price}</p>
                    <dl className="grid grid-cols-2 md:grid-cols-4 mt-8 border border-zinc-800 rounded-xl overflow-hidden divide-x divide-y divide-zinc-800">
                        <div className="p-6">
                            <dt className="text-xs tracking-widest uppercase text-zinc-500">Material</dt>
                            <dd className="mt-1 text-zinc-200">{product.specs.material}</dd>
                        </div>
                        <div className="p-6">
                            <dt className="text-xs tracking-widest uppercase text-zinc-500">Finish</dt>
                            <dd className="mt-1 text-zinc-200">{product.specs.finish}</dd>
                        </div>
                        <div className="p-6">
                            <dt className="text-xs tracking-widest uppercase text-zinc-500">Weight</dt>
                            <dd className="mt-1 text-zinc-200">{product.specs.weight}</dd>
                        </div>
                        <div className="p-6">
                            <dt className="text-xs tracking-widest uppercase text-zinc-500">SKU</dt>
                            <dd className="mt-1 font-mono text-zinc-200">{sku}</dd>
                        </div>
                    </dl>
                    <div className="mt-8 md:mt-14">
                        {inCart ? (
                            <div className="flex gap-4 items-center">
                                <button onClick={() => removeFromCart(product.id)} className="text-lg px-4 py-2 border-2 border-zinc-400 rounded-xl transition hover:border-zinc-200">-</button>
                                <span className="text-xl font-mono">{inCart.quantity}</span>
                                <button onClick={() => addToCart(product.id)} className="text-lg px-4 py-2 border-2 border-zinc-400 rounded-xl transition hover:border-zinc-200">+</button>
                            </div>
                        ) : (
                            <button onClick={() => addToCart(product.id)} className="text-lg px-16 py-2 border-2 border-zinc-400 rounded-xl transition hover:border-zinc-200">Add</button>
                        )}
                    </div>
                </div>
            </div>
            <h3 className="text-xs tracking-widest uppercase text-zinc-500 py-8">You may also like</h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5">
                {related.map((p) => {
                return (
                    <ProductCard
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    price={p.price}
                    image={p.image}
                    onOpen={() => navigate(`/product/${p.id}`)}
                    />
                )
                })}
            </div>
        </div>
    )
}

export default Product
