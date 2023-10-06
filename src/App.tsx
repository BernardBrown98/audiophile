// styles
import './App.css'
// hooks
import { useScrollToTop } from './hooks/useScrollToTop'
import { Routes, Route } from 'react-router-dom'
// context provider
import { ShoppingCartProvider } from './context/ShoppingCartContext'
// pages
import { Home } from './pages/Home'
import { Headphones } from './pages/headphones/Headphones'
import { Layout } from './layout/Layout'
import { Speakers } from './pages/speakers/Speakers'
import { Earphones } from './pages/earphones/Earphones'
import { XX99MarkII } from './pages/headphones/XX99MarkII'
import { XX99MarkI } from './pages/headphones/XX99MarkI'
import { XX59 } from './pages/headphones/XX59'
import { ZX9 } from './pages/speakers/ZX9'
import { ZX7 } from './pages/speakers/ZX7'
import { YX1 } from './pages/earphones/YX1'
import { Checkout } from './pages/Checkout'
function App() {
    useScrollToTop()
    return (
        <ShoppingCartProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/headphones" element={<Headphones />} />
                    <Route path="/speakers" element={<Speakers />} />
                    <Route path="/earphones" element={<Earphones />} />
                    <Route
                        path="/headphones/xx99-mk2"
                        element={<XX99MarkII />}
                    />
                    <Route
                        path="/headphones/xx99-mk1"
                        element={<XX99MarkI />}
                    />
                    <Route path="/headphones/xx59" element={<XX59 />} />
                    <Route path="/speakers/zx9" element={<ZX9 />} />
                    <Route path="/speakers/zx7" element={<ZX7 />} />
                    <Route path="/earphones/yx1" element={<YX1 />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Route>
            </Routes>
        </ShoppingCartProvider>
    )
}
export default App
