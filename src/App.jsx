import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'

import S1BlackFiber from './assets/skins/S1-BlackFiber.png';
import S2PinkFur from './assets/skins/S2-PinkFur.png';
import S3Iridescent from './assets/skins/S3-Iridescent.png';
import S4GlossyRed from './assets/skins/S4-GlossyRed.png';
import S5CamoTexture from './assets/skins/S5-CamoTexture.png';
import S6ChromeTexture from './assets/skins/S6-ChromeTexture.png';
import S7DenimTexture from './assets/skins/S7-DenimTexture.png';
import S8VelvetRoyal from './assets/skins/S8-VelvetRoyal.png';
import S9CarbonFiber from './assets/skins/S9-CarbonFiber.png';
import S10GoldMetallic from './assets/skins/S10-GoldMetallic.png';
import S11NeonGreen from './assets/skins/S11-NeonGreen.png';
import S12CarpetTexture from './assets/skins/S12-CarpetTexture.png';
import S13IceTexture from './assets/skins/S13-IceTexture.png';
import S14LeopardTexture from './assets/skins/S14-LeopardTexture.png';

const navCls = ({ isActive }) =>
  `font-mono text-xs tracking-widest uppercase py-2.5 px-4.5 rounded-full border transition-colors duration-150 ${
    isActive
      ? 'text-zinc-100 border-zinc-700 bg-zinc-800/60'
      : 'text-zinc-500 border-transparent hover:text-zinc-300 hover:border-zinc-700'
  }`;

function App() {

const [cart, setCart] = useState([])

const products = [
  { id: 10, name: 'Gold',        price: 349, image: S10GoldMetallic },
  { id: 6,  name: 'Chrome',      price: 329, image: S6ChromeTexture },
  { id: 3,  name: 'Iridescent',  price: 299, image: S3Iridescent },
  { id: 13, name: 'Ice',         price: 279, image: S13IceTexture },
  { id: 9,  name: 'Carbon',      price: 249, image: S9CarbonFiber },
  { id: 8,  name: 'Velvet',      price: 229, image: S8VelvetRoyal },
  { id: 4,  name: 'Glossy Red',  price: 199, image: S4GlossyRed },
  { id: 12, name: 'Carpet',      price: 189, image: S12CarpetTexture },
  { id: 2,  name: 'Pink Fur',    price: 179, image: S2PinkFur },
  { id: 14, name: 'Leopard',     price: 159, image: S14LeopardTexture },
  { id: 11, name: 'Neon Green',  price: 129, image: S11NeonGreen },
  { id: 7,  name: 'Denim',       price: 119, image: S7DenimTexture },
  { id: 5,  name: 'Camo',        price: 99,  image: S5CamoTexture },
  { id: 1,  name: 'Black',       price: 89,  image: S1BlackFiber },
];

function addToCart(productId) {
  const existing = cart.find(item => item.id === productId)
  if (existing) {
    setCart(cart.map(item => item.id === productId
      ? {...item, quantity: item.quantity + 1}
      : item
    ))
  } else {
    setCart([...cart, { id: productId, quantity: 1 }])
  }
}

function removeFromCart(productId) {
  const existing = cart.find(item => item.id === productId)
  if (!existing) return
  if (existing.quantity > 1) {
    setCart(cart.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ))
  } else {
    setCart(cart.filter(item => item.id !== productId))
  }
}

  return (
  <>
    <header className="flex items-center justify-between px-10 pt-7">
      <h1 className="m-0 text-2xl font-semibold tracking-widest uppercase">
        <span className="font-mono font-normal text-zinc-100">// </span>PuffLab
      </h1>
      <nav className="flex gap-1">
        <NavLink to="/" end className={navCls}>Home</NavLink>
        <NavLink to="/cart" className={navCls}>Cart ({cart.length})</NavLink>
      </nav>
    </header>
    <div className="h-px mx-10 mt-6 bg-linear-to-r from-zinc-800 to-transparent" />
    <div className="px-10 pt-8 pb-16">
      <Routes>
        <Route path="/" element={
          <Home
            products={products}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            cart={cart}
          />}
        />
        <Route path="/cart" element={
          <Cart
            products={products}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            cart={cart}
          />}
        />
      </Routes>
    </div>
  </>
  );
}

export default App;
