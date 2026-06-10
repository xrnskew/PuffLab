# PuffLab
 
A dark, minimal e-commerce storefront for a fictional techwear brand selling collectible puffer-jacket "skins". Built as a hands-on project to learn modern React from the ground up.
 
<!-- TODO: добавь живую ссылку после деплоя на Vercel -->
**Live demo:** [pufflab.vercel.app](https://pufflab.vercel.app)
 
<!-- TODO (по желанию): добавь скриншот. Положи картинку в репозиторий и впиши путь:
![PuffLab screenshot](./screenshot.png)
-->
 
## Features
 
- **Product grid** — 14 unique skins, each rendered from a single reusable `ProductCard` component
- **Shopping cart** — add / remove items, per-item quantity, automatic total calculation
- **Price sorting** — sort the grid by price ascending or descending
- **Client-side routing** — separate Home and Cart pages with no full-page reloads
- **Shared cart state** — cart lives in the top-level component and is shared across pages (lifting state up)
- **Dark minimal UI** — custom techwear-inspired theme
## Tech stack
 
- **React** — components, props, hooks (`useState`)
- **Vite** — build tool and dev server
- **React Router** — client-side navigation
- **Tailwind CSS** — utility-first styling
## Getting started
 
Clone the repo and install dependencies:
 
```bash
git clone https://github.com/xrnskew/pufflab.git
cd pufflab
npm install
```
 
Run the development server:
 
```bash
npm run dev
```
 
Open the URL shown in the terminal (usually `http://localhost:5173`).
 
Build for production:
 
```bash
npm run build
```
 
## Project structure
 
```
src/
├── App.jsx                  # top-level: holds cart state and routes
├── pages/
│   ├── home/Home.jsx        # product grid + sorting
│   └── cart/Cart.jsx        # cart contents + total
├── components/
│   └── ProductCard/         # reusable product card
└── assets/skins/            # product images
```
 
## Notes
 
The skin artwork was generated with AI and iterated to keep a consistent visual style across the collection.
 
---
 
Built by [xrnskew](https://github.com/xrnskew) while learning React.
 





