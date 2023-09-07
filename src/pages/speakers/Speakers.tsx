// components
import { CategoryCard } from '../../components/CategoryCard'
import { DropdownMenu } from '../../components/DropdownMenu'
import { ModelGear } from '../../components/ModelGear'

// ZX7 Imgs
import MobileZX7 from '/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg'
import TabletZX7 from '/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg'
import DesktopZX7 from '/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg'
// ZX9 Imgs
import MobileZX9 from '/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg'
import TabletZX9 from '/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg'
import DesktopZX9 from '/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'

export const Speakers = () => {
    return (
        <>
            <header className="md:text-tabletSubheader flex h-[102px] w-full flex-col justify-center bg-black text-center text-subHeader text-white md:h-[235px]">
                <h1>SPEAKERS</h1>
            </header>
            <main className="flex flex-col items-center px-6 md:px-10">
                <div className="flex w-full max-w-[1100px] flex-col items-center">
                    <CategoryCard
                        newProduct
                        productTitle="ZX9 SPEAKER"
                        mobileImg={MobileZX7}
                        tabletImg={TabletZX7}
                        desktopImg={DesktopZX7}
                        productLink="/speakers/zx7"
                    >
                        Upgrade your sound system with the all new ZX9 active
                        speaker. It’s a bookshelf speaker system that offers
                        truly wireless connectivity -- creating new
                        possibilities for more pleasing and practical audio
                        setups.
                    </CategoryCard>
                    <CategoryCard
                        productTitle="ZX7 SPEAKER"
                        orderReversed
                        mobileImg={MobileZX9}
                        tabletImg={TabletZX9}
                        desktopImg={DesktopZX9}
                        productLink="/speakers/zx9"
                    >
                        Stream high quality sound wirelessly with minimal loss.
                        The ZX7 bookshelf speaker uses high-end audiophile
                        components that represents the top of the line powered
                        speakers for home or studio use.
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
