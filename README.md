# 🛒 ShoppyGlobe – React E-commerce Application

ShoppyGlobe is a basic e-commerce web application built using **React + Vite**, **Redux Toolkit**, and **React Router**.  
The project demonstrates product listing, product details, cart management, checkout flow, and state management using Redux.

## 🚀 Live Demo
- <a href="https://shoppy-globe-ebon.vercel.app/">ShoppyGlobe 🌐</a>

## 🚀 Live Features

- Product listing with category & search filter
- Product detail page with dynamic routing
- Add to cart, remove from cart,delete product from cart, quantity control
- Redux-based cart & search state
- Checkout page with dummy user form with order summary
- Order placement with cart reset & auto redirect
- Error handling & 404 page


## 🧩 Tech Stack

- **React (Vite)**
- **Tailwind CSS**
- **Axios**
- **React Router DOM**
- **Redux Toolkit**


## 🔄 Routing

- `/` → Home (Product List)
- `/product/:id` → Product Detail
- `/category/:categoryName` → Filtered Products
- `/cart` → Cart Page
- `/checkout` → Checkout Page
- `/Err-element` → 404 Not Found


## 🛍️ Checkout Flow

1. User fills in name, email & address with follow compulsory steps 
2. Order summary is displayed
3. Click **Place Order**
4. Placed Order message appears via alert method
5. Cart is cleared using Redux
6. User is redirected to Home automatically


## 🔁 State Management (Redux)

### Cart Slice
- `addItem`
- `removeItem`
- `increment`
- `decrement`
- `clearCart`

### Search Slice
- `setSearchQuery`


## 📦 Installation & Setup

```bash
git clone <YOUR_GITHUB_REPO_LINK>
cd shoppyglobe
npm install
npm run dev