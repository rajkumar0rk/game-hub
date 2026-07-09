# Game Hub

A responsive product-browsing dashboard built with **React 19**, **TypeScript**, and **Material UI**. Users can browse products by category, search, sort, and toggle between light and dark mode — all backed by a small, reusable Axios service layer.

> Live data comes from the free [DummyJSON](https://dummyjson.com) API, so the app can be run instantly with no API key or backend setup.

## Features

- 🗂️ **Category sidebar** — filter products by category, fetched dynamically from the API
- 🔍 **Search** — full-text search across products
- ⬍ **Sort & order** — sort by title, category, rating, price, or discount percentage, in ascending or descending order
- 🌓 **Light / dark mode** — theme toggle powered by MUI's color scheme support
- 💳 **Product cards** — image, title, category, price, and a like/favorite toggle
- ⏳ **Loading skeletons** — skeleton placeholders while data is being fetched
- ❌ **Error handling** — inline error messaging if a request fails
- 🚫 **Request cancellation** — in-flight requests are aborted on filter/search changes to avoid race conditions

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite |
| UI library | Material UI (MUI) v7, Emotion |
| HTTP client | Axios (custom service layer with `AbortController` support) |
| Data source | [DummyJSON](https://dummyjson.com) REST API |
| Linting / formatting | ESLint, Prettier |

## Project Structure

```
src/
├── components/       # Reusable UI pieces (Card, Search, Select, Switch, Button)
├── Hooks/            # Custom hooks (useProduct, useCategories)
├── Layouts/          # Page layout components (NavBar, SideBar, Main)
├── Services/         # Axios client + generic HTTP service class
├── types/            # Shared TypeScript interfaces
├── theme.ts          # MUI theme configuration (light/dark palettes, typography)
├── App.tsx           # App shell wiring layout + state together
└── main.tsx          # Entry point
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/rajkumar0rk/game-hub.git
cd game-hub

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173` (Vite's default port).

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run formate` | Format the codebase with Prettier |

## Roadmap

- [ ] Persist liked/favorited products (e.g. localStorage)
- [ ] Pagination or infinite scroll for large result sets
- [ ] Product detail page/modal
- [ ] Unit tests for hooks and services

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built by [Raj Kumar](https://github.com/rajkumar0rk) — feel free to ⭐ the repo if you find it useful.
