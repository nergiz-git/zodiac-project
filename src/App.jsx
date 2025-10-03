import './App.css'
import ZodiacDetails from './pages/ZodiacDetails/ZodiacDetails'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './MainLayout/MainLayout'
import FindYourZodiac from './pages/FindYourZodiac/FindYourZodiac'
import CompatibilityTest from './pages/CompatibilityTest/CompatibilityTest'
import Profile from './pages/Profile/Profile'
import Shop from './pages/Shop/Shop'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import { useEffect, useState } from 'react'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Page404 from "./pages/Page404/Page404";  
import HoroscopePage from './Components/HoroscopePage/HoroscopePage'
import ProductDetail from './Components/ProductDetail/ProductDetail'


 function App() {
  const [theme, setTheme] = useState("light");
  const [cartItems, setCartItems] = useState([])
  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id)
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }
  return (
    <div className="app" data-theme={theme}>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout theme={theme} setTheme={setTheme} />}>
         <Route index element={<Home cartItems={cartItems} addToCart={addToCart} />} />
        <Route path="findyourzodiac" element={<FindYourZodiac />} />
        <Route path="zodiacdetails" element={<ZodiacDetails />} />
        <Route path="/daily/:sign" element={<HoroscopePage type="daily" />} />
        <Route path="/monthly/:sign" element={<HoroscopePage type="monthly" />} />
        <Route path="compatibilitytest" element={<CompatibilityTest />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route path="shop" element={<Shop cartItems={cartItems} addToCart={addToCart}  removeFromCart={removeFromCart}  />} />
        <Route path="/product/:id" element={<ProductDetail cartItems={cartItems} addToCart={addToCart}   removeFromCart={removeFromCart} />} />
        <Route path="cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
        </Route>
                <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
