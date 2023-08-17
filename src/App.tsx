// styles
import './App.css'
// hooks
import { Routes, Route } from 'react-router-dom'
// pages
import { Home } from './pages/Home'
import { Headphones } from './pages/Headphones'
import { Layout } from './layout/Layout'
function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/headphones" element={<Headphones />} />
                    <Route path="/speakers" element={<Headphones />} />
                    <Route path="/earphones" element={<Headphones />} />
                </Route>
            </Routes>
        </div>
    )
}
export default App
