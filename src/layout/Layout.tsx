import clsx from 'clsx'
// hooks
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

// components
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Cart } from '../components/cart/Cart'

export const Layout = () => {
    const [isActive, setIsActive] = useState(false)
    const [isActiveCart, setIsActiveCart] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    const [isMobile, setIsMobile] = useState(true)

    const handleResize = () => {
        setWidth(window.innerWidth)
        setIsMobile(width < 1280 ? true : false)
        !isMobile && setIsActive(false)
        !isMobile && (document.body.style.overflow = 'visible')
    }

    const handleClick = (element?: 'ham' | 'cart') => {
        // if hamburger icon is clicked dropwdown menu
        if (element === 'ham') {
            setIsActive((prev) => !prev)
            // if dropdownmenu is active and cart icon is clicked hide dropdown menu
            if (isActiveCart) setIsActiveCart((prev) => !prev)
        }
        // vice versa functionality from block above
        if (element === 'cart') {
            setIsActiveCart((prev) => !prev)
            if (isActive) setIsActive((prev) => !prev)
        }

        isActive || isActiveCart
            ? (document.body.style.overflow = 'visible')
            : (document.body.style.overflow = 'hidden')
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [width])

    const opacityClasses = clsx('relative top-[89px] w-full overflow-auto', {
        ' opacity-50 brightness-[.20] backdrop-blur-md':
            isActive || isActiveCart,
    })
    return (
        <>
            <Header isActive={isActive} handleClick={handleClick} />
            <Cart isActiveCart={isActiveCart} />
            <main className={opacityClasses}>
                <Outlet />
            </main>
            <footer className="relative top-[89px] flex flex-col items-center bg-offBlack-200 pb-[38px] md:pb-[46px] xl:pb-[48px]">
                <Footer />
            </footer>
        </>
    )
}
