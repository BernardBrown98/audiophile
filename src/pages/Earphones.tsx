// components
import { CategoryCard } from '../components/CategoryCard'
import { DropdownMenu } from '../components/DropdownMenu'
import { ModelGear } from '../components/ModelGear'

// Mark II Imgs
import MobileYX1 from '../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg'
import TabletYX1 from '../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg'
import DesktopYX1 from '../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'

export const Earphones = () => {
    return (
        <>
            <header className="md:text-tabletSubheader flex h-[102px] w-full flex-col justify-center bg-black text-center text-subHeader text-white md:h-[235px]">
                <h1>EARPHONES</h1>
            </header>
            <main className="flex flex-col items-center px-6 md:px-10">
                <div className="flex w-full max-w-[1100px] flex-col items-center">
                    <CategoryCard
                        newProduct
                        productTitle="YX1 WIRELESS EARPHONES"
                        mobileImg={MobileYX1}
                        tabletImg={TabletYX1}
                        desktopImg={DesktopYX1}
                    >
                        Tailor your listening experience with bespoke dynamic
                        drivers from the new YX1 Wireless Earphones. Enjoy
                        incredible high-fidelity sound even in noisy
                        environments with its active noise cancellation feature.
                    </CategoryCard>
                </div>
                <div className="mt-[100px] flex w-full flex-col items-center">
                    <DropdownMenu isDropDown={false} />
                    <ModelGear />
                </div>
            </main>
        </>
    )
}
