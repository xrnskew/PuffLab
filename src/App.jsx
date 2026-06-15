import { useState, useEffect } from 'react';
import { Routes, Route, NavLink} from 'react-router-dom';

import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Product from './pages/product/Product';

import S1BlackFiber from './assets/skins/S1-BlackFiber.webp';
import S2PinkFur from './assets/skins/S2-PinkFur.webp';
import S3Iridescent from './assets/skins/S3-Iridescent.webp';
import S4GlossyRed from './assets/skins/S4-GlossyRed.webp';
import S5CamoTexture from './assets/skins/S5-CamoTexture.webp';
import S6ChromeTexture from './assets/skins/S6-ChromeTexture.webp';
import S7DenimTexture from './assets/skins/S7-DenimTexture.webp';
import S8VelvetRoyal from './assets/skins/S8-VelvetRoyal.webp';
import S9CarbonFiber from './assets/skins/S9-CarbonFiber.webp';
import S10GoldMetallic from './assets/skins/S10-GoldMetallic.webp';
import S11NeonGreen from './assets/skins/S11-NeonGreen.webp';
import S12CarpetTexture from './assets/skins/S12-CarpetTexture.webp';
import S13IceTexture from './assets/skins/S13-IceTexture.webp';
import S14LeopardTexture from './assets/skins/S14-LeopardTexture.webp';

function App() {

const [cart, setCart] = useState(() => {
  const saved = localStorage.getItem('cart')
  return saved ? JSON.parse(saved) : []
})

useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart))
}, [cart])

const products = [
  { id: 10, name: 'Gold',        price: 349, image: S10GoldMetallic, description: 'A mirror-polished metallic shell that catches the light from every angle. Heavyweight quilted construction for a jewelry-grade statement piece.', specs: { material: 'Nylon', finish: 'Metallic gloss', weight: '720g' } },
  { id: 6,  name: 'Chrome',      price: 329, image: S6ChromeTexture, description: 'High-gloss chrome shell with a true mirror finish. Scratch-resistant laminate keeps the shine intact through daily wear.', specs: { material: 'Nylon', finish: 'Mirror chrome', weight: '700g' } },
  { id: 3,  name: 'Iridescent',  price: 299, image: S3Iridescent, description: 'A holographic, colour-shifting shell that shimmers between violet, teal and gold depending on the light.', specs: { material: 'Polyester', finish: 'Holographic', weight: '680g' } },
  { id: 13, name: 'Ice',         price: 279, image: S13IceTexture, description: 'A frosted, semi-translucent shell with a cool blue undertone — looks like it was cut from glacier ice.', specs: { material: 'Polyester', finish: 'Frosted matte', weight: '660g' } },
  { id: 9,  name: 'Carbon',      price: 249, image: S9CarbonFiber, description: 'Woven carbon-fibre pattern under a satin clear coat. Lightweight, durable, and unmistakably technical.', specs: { material: 'Carbon weave', finish: 'Satin coat', weight: '590g' } },
  { id: 8,  name: 'Velvet',      price: 229, image: S8VelvetRoyal, description: 'Soft-touch velvet shell in a deep royal hue. Plush texture with a luxury feel.', specs: { material: 'Velvet', finish: 'Soft-touch', weight: '740g' } },
  { id: 4,  name: 'Glossy Red',  price: 199, image: S4GlossyRed, description: 'Deep, high-gloss red lacquer shell. Bold, classic, and built to turn heads.', specs: { material: 'Nylon', finish: 'Lacquer gloss', weight: '690g' } },
  { id: 12, name: 'Carpet',      price: 189, image: S12CarpetTexture, description: 'A looped carpet-fibre shell texture for a tactile, retro feel — durable and grippy.', specs: { material: 'Looped fibre', finish: 'Textured matte', weight: '780g' } },
  { id: 2,  name: 'Pink Fur',    price: 179, image: S2PinkFur, description: 'Plush faux-fur shell in bubblegum pink. Soft to the touch with a playful, statement look.', specs: { material: 'Faux fur', finish: 'Plush', weight: '810g' } },
  { id: 14, name: 'Leopard',     price: 159, image: S14LeopardTexture, description: 'Hand-finished leopard print over a matte shell. Every piece has a slightly unique pattern placement.', specs: { material: 'Polyester', finish: 'Printed matte', weight: '700g' } },
  { id: 11, name: 'Neon Green',  price: 129, image: S11NeonGreen, description: 'Ultra-bright neon green with a satin shell finish. Easy to spot in low light, impossible to lose in a crowd.', specs: { material: 'Nylon', finish: 'Satin', weight: '650g' } },
  { id: 7,  name: 'Denim',       price: 119, image: S7DenimTexture, description: 'Genuine stitched-denim shell with raw-edge detailing for a worn-in, everyday feel.', specs: { material: 'Denim', finish: 'Raw matte', weight: '760g' } },
  { id: 5,  name: 'Camo',        price: 99,  image: S5CamoTexture, description: 'Multi-tone camouflage shell in a matte finish. Built for low-key, all-weather style.', specs: { material: 'Cotton blend', finish: 'Matte', weight: '670g' } },
  { id: 1,  name: 'Black',       price: 89,  image: S1BlackFiber, description: 'Woven black fibre shell with a matte clear coat. Minimal, durable, and goes with everything.', specs: { material: 'Woven fibre', finish: 'Matte coat', weight: '640g' } },
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

const navCls = ({ isActive }) =>
  `font-mono text-xs tracking-widest uppercase py-2.5 px-4.5 rounded-full border-2 transition-colors duration-150 ${
    isActive
      ? 'text-zinc-100 border-zinc-700 bg-zinc-800/60'
      : 'text-zinc-500 border-transparent hover:border-2 hover:text-zinc-300 hover:border-zinc-700'
  }`;

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
        <Route path="/product/:id" element={
          <Product
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
