import { useState } from "react";
import { Link } from "react-router-dom";

function Checkout({ products, cart, onOrderSubmit }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const total = cart.reduce((sum, item) => {
        const product = products.find((p) => p.id === item.id);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);

    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !email || !address) {
            alert("Please fill in all fields");
            return;
        }
        setSubmitted(true);
        if (onOrderSubmit) onOrderSubmit();
    }

    if (submitted) {
        return (
            <div className="max-w-2xl mx-auto py-16 text-center">
                <div className="p-10 bg-zinc-900 border border-zinc-800 rounded-xl">
                    <h2 className="text-3xl text-zinc-100 tracking-widest uppercase mb-4">
                        Order Received
                    </h2>
                    <p className="text-zinc-400 mb-8">Thank you, {name}! We have sent the details to {email}.</p>
                    <Link
                        to="/"
                        className="inline-block py-4 px-10 rounded-full bg-zinc-100 text-zinc-900 text-sm font-medium tracking-widest uppercase transition hover:bg-zinc-300"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="max-w-2xl mx-auto py-16 text-center">
                <p className="font-mono text-xs tracking-widest uppercase text-zinc-500">
                    <span className="text-zinc-100">[ </span>Cart is empty<span className="text-zinc-100"> ]</span>
                </p>
                <Link
                    to="/"
                    className="inline-block mt-6 text-sm text-zinc-500 transition hover:text-zinc-200"
                >
                    ← Back to products
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto py-4">
            <div className="flex items-center gap-2">
                <Link to="/" className="text-lg text-zinc-500 transition hover:text-zinc-200">Home</Link>
                <span className="text-lg text-zinc-500">/</span>
                <Link to="/cart" className="text-lg text-zinc-500 transition hover:text-zinc-200">Cart</Link>
                <span className="text-lg text-zinc-500">/</span>
                <span className="text-lg text-zinc-400">Checkout</span>
            </div>

            <h1 className="text-4xl text-zinc-100 tracking-widest uppercase py-8">Checkout</h1>

            <div className="grid md:grid-cols-[1fr_380px] gap-8">
                <form
                    onSubmit={handleSubmit}
                    className="p-8 bg-zinc-900 border border-zinc-800 rounded-xl flex flex-col gap-6 h-fit"
                >
                    <h2 className="text-xs tracking-widest uppercase text-zinc-500">Contact Details</h2>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs tracking-widest uppercase text-zinc-500">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            className="w-full h-12 px-4 bg-zinc-950 border border-zinc-700 rounded-lg text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-zinc-400"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs tracking-widest uppercase text-zinc-500">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full h-12 px-4 bg-zinc-950 border border-zinc-700 rounded-lg text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-zinc-400"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs tracking-widest uppercase text-zinc-500">Shipping Address</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Address"
                            className="w-full h-12 px-4 bg-zinc-950 border border-zinc-700 rounded-lg text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-zinc-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 h-12 w-full rounded-full bg-zinc-100 text-zinc-900 text-sm font-medium tracking-widest uppercase transition hover:bg-zinc-300"
                    >
                        Place Order
                    </button>
                </form>

                <aside className="p-8 bg-zinc-900 border border-zinc-800 rounded-xl flex flex-col gap-5 h-fit">
                    <h2 className="text-xs tracking-widest uppercase text-zinc-500">Your Order</h2>

                    <ul className="flex flex-col gap-4">
                        {cart.map((item) => {
                            const product = products.find((p) => p.id === item.id);
                            if (!product) return null;
                            return (
                                <li key={item.id} className="flex items-center gap-4">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-14 h-14 rounded-lg border border-zinc-800 object-cover"
                                    />
                                    <div className="flex-1">
                                        <p className="text-sm text-zinc-200 tracking-wide uppercase">
                                            {product.name}
                                        </p>
                                        <p className="text-xs text-zinc-500 font-mono">x{item.quantity}</p>
                                    </div>
                                    <span className="font-mono text-sm text-zinc-100">
                                        ${product.price * item.quantity}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="mt-2 pt-5 border-t border-zinc-800 flex items-center justify-between">
                        <span className="text-xs tracking-widest uppercase text-zinc-500">Total</span>
                        <span className="font-mono text-xl text-zinc-100">${total}</span>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default Checkout;