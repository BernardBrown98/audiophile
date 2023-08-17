// import clsx from 'clsx'
// hooks
// import { useState, useEffect } from 'react'
// components
// import { Header } from '../components/Header'
import { ModelGear } from '../components/ModelGear'
// import { Footer } from '../components/Footer'
// images
import MobileHeader from '../assets/home/mobile/image-header.jpg'
import TabletHeader from '../assets/home/tablet/image-header.jpg'
import DesktopHeader from '../assets/home/desktop/image-hero.jpg'
import { DropdownMenu } from '../components/DropdownMenu'
import { ProductGrid } from '../components/ProductGrid'

export const Home = () => {
    // const [isActive, setIsActive] = useState(false)
    // const [width, setWidth] = useState(window.innerWidth)
    // const [isMobile, setIsMobile] = useState(true)

    // const handleResize = () => {
    //     setWidth(window.innerWidth)
    //     setIsMobile(width < 1280 ? true : false)
    //     !isMobile && setIsActive(false)
    //     !isMobile && (document.body.style.overflow = 'visible')
    // }

    // const handleClick = () => {
    //     setIsActive((prev) => !prev)
    //     isActive
    //         ? (document.body.style.overflow = 'visible')
    //         : (document.body.style.overflow = 'hidden')
    // }

    // useEffect(() => {
    //     window.addEventListener('resize', handleResize)
    //     return () => {
    //         window.removeEventListener('resize', handleResize)
    //     }
    // }, [width])

    // const opacityClasses = clsx('relative top-[89px] w-full overflow-auto', {
    //     ' opacity-50': isActive,
    // })

    return (
        <>
            {/* <Header isActive={isActive} handleClick={handleClick} /> */}
            {/* <main className={opacityClasses}> */}
            <div
                style={
                    {
                        '--mobile': `url(${MobileHeader})`,
                        '--tablet': `url(${TabletHeader})`,
                        '--desktop': `url(${DesktopHeader})`,
                    } as React.CSSProperties
                }
                className=" flex h-[729px] w-full justify-center bg-[url:--mobile] bg-cover  bg-center bg-no-repeat text-white md:bg-[url:--tablet] xl:bg-[url:--desktop]"
            >
                <div className="flex w-full max-w-[1100px] justify-center xl:justify-start">
                    <div className="xl:text-start2 flex h-full max-w-[398px] flex-col items-center justify-center text-center xl:items-start xl:text-start">
                        <h3 className="mb-4 text-newProduct opacity-50">
                            NEW PRODUCT
                        </h3>
                        <h1 className="mb-6 text-mobileHeader md:text-desktopHeader">
                            XX99 MARK II HEADPHONES
                        </h1>
                        <p className="max-w-[349px] text-p opacity-75">
                            Experience natural, lifelike audio and exceptional
                            build quality made for the passionate music
                            enthusiast.
                        </p>
                        <button className="mt-7 bg-nude-200 px-[31.5px] py-[15px] text-shop transition-all ease-in-out hover:bg-nude-100 md:mt-[55px] xl:mt-10">
                            SEE PRODUCT
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-col items-center px-6 md:px-10">
                <DropdownMenu isDropDown={false} />
                <ProductGrid />
                <ModelGear />
            </div>
            {/* <footer className="flex flex-col items-center bg-offBlack-200 pb-[38px] md:pb-[46px] xl:pb-[48px]">
                <Footer />
            </footer> */}
            {/* </main> */}
            {/* DELETE LATERR */}
        </>
    )
}
