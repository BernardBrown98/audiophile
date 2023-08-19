// styles
import './App.css'
// hooks
import { useScrollToTop } from './hooks/useScrollToTop'
import { Routes, Route } from 'react-router-dom'
// pages
import { Home } from './pages/Home'
import { Headphones } from './pages/Headphones'
import { Layout } from './layout/Layout'
import { Speakers } from './pages/Speakers'
import { Earphones } from './pages/Earphones'
function App() {
    useScrollToTop()
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/headphones" element={<Headphones />} />
                    <Route path="/speakers" element={<Speakers />} />
                    <Route path="/earphones" element={<Earphones />} />
                </Route>
            </Routes>
        </div>
    )
}
export default App
