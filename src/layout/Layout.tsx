import clsx from 'clsx'
// hooks
import { useState, useEffect } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'

// components
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Cart } from '../components/cart/Cart'
import { OrderConfirmation } from '../components/form/OrderConfirmation'

type ContextType = {
    handleClick: (element?: 'summary') => void
    isActiveSummary: boolean
}

export const Layout = () => {
    const [isActive, setIsActive] = useState(false)
    const [isActiveCart, setIsActiveCart] = useState(false)
    const [isActiveSummary, setIsActiveSummary] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    const [isMobile, setIsMobile] = useState(true)

    const handleResize = () => {
        setWidth(window.innerWidth)
        setIsMobile(width < 1280 ? true : false)
        !isMobile && setIsActive(false)
        !isMobile && (document.body.style.overflow = 'visible')
    }

    const handleClick = (element?: 'ham' | 'cart' | 'summary') => {
        // if hamburger icon is clicked dropwdown menu
        if (element === 'ham') {
            setIsActive((prev) => !prev)
            // if dropdownmenu is active and cart icon is clicked hide dropdown menu
            if (isActiveCart) setIsActiveCart((prev) => !prev)
            if (isActiveSummary) setIsActive((prev) => !prev)
        }
        // vice versa functionality from block above
        if (element === 'cart') {
            setIsActiveCart((prev) => !prev)
            if (isActive) setIsActive((prev) => !prev)
            if (isActiveSummary) setIsActive((prev) => !prev)
        }

        if (element === 'summary') {
            console.log('we in here')
            setIsActiveSummary((prev) => !prev)
            if (isActive) setIsActive((prev) => !prev)
            if (isActiveCart) setIsActiveCart((prev) => !prev)
        }
        if (element === undefined && isActiveCart) {
            // if either hamburger menu or cart is open and logo is clicked the overlay will be closed
            setIsActiveCart((prev) => !prev)
        }
        if (element === undefined && isActive) {
            setIsActive((prev) => !prev)
        }

        if (element === undefined && isActiveSummary) {
            setIsActiveSummary((prev) => !prev)
        }
        if (
            element === undefined &&
            !isActiveCart &&
            !isActive &&
            !isActiveSummary
        )
            return
        isActive || isActiveCart || isActiveSummary
            ? (document.body.style.overflow = 'visible')
            : (document.body.style.overflow = 'hidden')
    }
    console.log(isActive)
    console.log(isActiveCart)
    console.log(isActiveSummary)

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [width])

    const opacityClasses = clsx(
        'relative top-[89px] w-full overflow-auto bg-offWhite-200',
        {
            ' opacity-50 brightness-[.20] backdrop-blur-md':
                isActive || isActiveCart || isActiveSummary,
        }
    )
    return (
        <>
            <Header isActive={isActive} handleClick={handleClick} />
            <Cart isActiveCart={isActiveCart} handleClick={handleClick} />
            <OrderConfirmation
                isActiveSummary={isActiveSummary}
                handleClick={handleClick}
            />

            <main className={opacityClasses}>
                <Outlet context={{ handleClick, isActiveSummary }} />
            </main>
            <footer className="relative top-[89px] flex flex-col items-center bg-offBlack-200 pb-[38px] md:pb-[46px] xl:pb-[48px]">
                <Footer />
            </footer>
        </>
    )
}
export const useHandleClick = () => useOutletContext<ContextType>()
