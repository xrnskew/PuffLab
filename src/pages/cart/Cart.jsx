import { Link } from 'react-router-dom';
import CartItem from '../../components/cartitem/CartItem';

function Cart({ products, addToCart, removeFromCart, cart }) {

    const total = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);

    if (cart.length === 0) {
        return (
            <div className="max-w-5xl mx-auto py-4">
                <div className="flex items-center gap-2">
                    <Link to="/" className="text-lg text-zinc-500 transition hover:text-zinc-200">Home</Link>
                    <span className="text-lg text-zinc-500">/</span>
                    <span className="text-lg text-zinc-400">Cart</span>
                </div>

                <h1 className="text-4xl text-zinc-100 tracking-widest uppercase py-8">Cart</h1>

                <div className="p-10 bg-zinc-900 border border-zinc-800 rounded-xl text-center">
                    <p className="font-mono text-xs tracking-widest uppercase text-zinc-500">
                        <span className="text-zinc-100">[ </span>Cart is empty<span className="text-zinc-100"> ]</span>
                    </p>
                    <Link
                        to="/"
                        className="inline-block mt-6 text-sm text-zinc-500 transition hover:text-zinc-200"
                    >
                        ← Вернуться к товарам
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto py-4">
            <div className="flex items-center gap-2">
                <Link to="/" className="text-lg text-zinc-500 transition hover:text-zinc-200">Home</Link>
                <span className="text-lg text-zinc-500">/</span>
                <span className="text-lg text-zinc-400">Cart</span>
            </div>

            <h1 className="text-4xl text-zinc-100 tracking-widest uppercase py-8">Cart</h1>

            <div className="flex flex-row items-center justify-between mb-7">
                <div className="inline-flex items-baseline gap-2.5 py-3.5 px-5.5 bg-zinc-900 border border-zinc-800 rounded-full font-mono">
                    <span className="text-xs tracking-widest uppercase text-zinc-500">Total</span>
                    <span className="text-lg text-zinc-100">${total}</span>
                </div>
                <div>
                    <Link
                        to="/checkout"
                        className="inline-block py-4 px-8 rounded-full bg-zinc-100 text-zinc-900 text-sm font-medium tracking-widest uppercase transition hover:bg-zinc-300"
                    >
                        Checkout
                    </Link>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                {cart.map((item) => {
                    const product = products.find(p => p.id === item.id);
                    if (!product) return null;
                    return (
                        <CartItem
                            key={product.id}
                            product={product}
                            quantity={item.quantity}
                            onAdd={() => addToCart(product.id)}
                            onRemove={() => removeFromCart(product.id)}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Cart;