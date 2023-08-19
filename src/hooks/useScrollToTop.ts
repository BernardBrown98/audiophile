// hooks
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useScrollToTop = () => {
    const { pathname } = useLocation()
    const scrollToTop = () => window.scrollTo(0, 0)

    useEffect(() => {
        scrollToTop()
    }, [pathname])
}
