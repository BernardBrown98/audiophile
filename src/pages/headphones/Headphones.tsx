// components
import { CategoryCard } from '../../components/CategoryCard'
import { DropdownMenu } from '../../components/DropdownMenu'
import { ModelGear } from '../../components/ModelGear'
// Mark II Imgs
import MobileMarkIIHeadphones from '../../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg'
import TabletMarkIIHeadphones from '../../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg'
import DesktopMarkIIHeadphones from '../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'
// Mark I Imgs
import MobileMarkIHeadphones from '../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg'
import TabletMarkIHeadphones from '../../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg'
import DesktopMarkIHeadphones from '../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
// Mark XX59 Imgs
import MobileXX59 from '../../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg'
import TabletXX59 from '../../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg'
import DesktopXX59 from '../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg'

import data from '../../data/products.json'
export const Headphones = () => {
    return (
        <>
            <header className="md:text-tabletSubheader flex h-[102px] w-full flex-col justify-center bg-black text-center text-subHeader text-white md:h-[235px]">
                <h1>HEADPHONES</h1>
            </header>
            <main className="flex flex-col items-center px-6 md:px-10">
                <div className="flex w-full max-w-[1100px] flex-col items-center">
                    {data.headphones.map((item, index) => (
                        <CategoryCard
                            newProduct={item.newProduct}
                            productTitle={item.name}
                            mobileImg={item.imgs.categoryMobile}
                            tabletImg={item.imgs.categoryTablet}
                            desktopImg={item.imgs.categoryDesktop}
                            productLink={item.link}
                            orderReversed={index % 2 === 0 ? false : true}
                        >
                            {item.description}
                        </CategoryCard>
                    ))}

                    {/* <CategoryCard
                        newProduct
                        productTitle="XX99 Mark II Headphones"
                        mobileImg={MobileMarkIIHeadphones}
                        tabletImg={TabletMarkIIHeadphones}
                        desktopImg={DesktopMarkIIHeadphones}
                        productLink="/headphones/xx99-mk2"
                    >
                        The new XX99 Mark II headphones is the pinnacle of
                        pristine audio. It redefines your premium headphone
                        experience by reproducing the balanced depth and
                        precision of studio-quality sound.
                    </CategoryCard>
                    <CategoryCard
                        productTitle="XX99 Mark I Headphones"
                        orderReversed
                        mobileImg={MobileMarkIHeadphones}
                        tabletImg={TabletMarkIHeadphones}
                        desktopImg={DesktopMarkIHeadphones}
                        productLink="/headphones/xx99-mk1"
                    >
                        As the gold standard for headphones, the classic XX99
                        Mark I offers detailed and accurate audio reproduction
                        for audiophiles, mixing engineers, and music aficionados
                        alike in studios and on the go.
                    </CategoryCard>
                    <CategoryCard
                        productTitle={'XX59 \nHeadphones'}
                        mobileImg={MobileXX59}
                        tabletImg={TabletXX59}
                        desktopImg={DesktopXX59}
                        productL    nk="/headphones/xx59"
                    >
                        Enjoy your audio almost anywhere and customize it to
                        your specific tastes with the XX59 headphones. The
                        stylish yet durable versatile wireless headset is a
                        brilliant companion at home or on the move.
                    </CategoryCard> */}
                </div>
                <div className="mt-[100px] flex w-full flex-col items-center">
                    <DropdownMenu isDropDown={false} />
                    <ModelGear />
                </div>
            </main>
        </>
    )
}
