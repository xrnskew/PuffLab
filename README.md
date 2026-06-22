# PuffLab

A dark, minimal e-commerce storefront for a fictional techwear brand selling collectible puffer-jacket "skins". Built as a hands-on project to learn modern React from the ground up.

**Live demo:** [pufflab-eight.vercel.app](https://pufflab-eight.vercel.app/)

## Features

- **Product grid** — 14 unique skins, each rendered from a single reusable `ProductCard` component, in a randomised order on each visit
- **Product detail page** — dynamic route (`/product/:id`) with full info, specs table and add-to-cart
- **Quick-view modal** — click any card to preview a product without leaving the grid, with a link through to the full page
- **Shopping cart** — add / remove items, per-item quantity, automatic total calculation
- **Related products** — "You may also like" suggests random other skins on each product page
- **Price sorting** — sort the grid by price ascending or descending
- **Client-side routing** — Home, Cart and Product pages with no full-page reloads
- **Shared cart state** — cart lives in the top-level component and is shared across all pages (lifting state up)
- **Responsive layout** — adapts from a single column on mobile to multi-column on desktop
- **Dark minimal UI** — custom techwear-inspired theme

## Tech stack

- **React** — components, props, hooks (`useState`, `useMemo`)
- **Vite** — build tool and dev server
- **React Router** — client-side navigation, dynamic routes (`useParams`, `useNavigate`)
- **Tailwind CSS** — utility-first styling
- **Vercel** — hosting and continuous deployment

## Getting started

Clone the repo and install dependencies:

```bash
git clone https://github.com/xrnskew/pufflab.git
cd front-end
npm install
```

Run the development server:

```bash
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

Build for production:

```bash
npm run build
```

## Project structure

```
src/
├── App.jsx                          # top-level: cart state, product data, routes
├── pages/
│   ├── home/Home.jsx                # product grid, sorting, quick-view modal
│   ├── cart/Cart.jsx                # cart contents + total
│   └── product/Product.jsx          # product detail page (dynamic route)
├── components/
│   ├── ProductCard/                 # reusable product card
│   └── ProductModal/                # quick-view modal
└── assets/skins/                    # product images
```

## Notes

The skin artwork was generated with AI and iterated to keep a consistent visual style across the collection.

---

Built by [xrnskew](https://github.com/xrnskew) while learning React.
