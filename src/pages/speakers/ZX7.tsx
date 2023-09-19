// components
import { ProductDetails } from '../../components/product-details/ProductDetails'
import { DropdownMenu } from '../../components/DropdownMenu'
import { ModelGear } from '../../components/ModelGear'
import { ProductGridImgs } from '../../components/product-details/ProductGridImgs'
import { ProductRecommend } from '../../components/product-details/ProductRecommend'
// data
import data from '../../data/products.json'
// grid imgs
import MobileGridGallery1 from '/assets/product-zx7-speaker/mobile/image-gallery-1.jpg'
import TabletGridGallery1 from '/assets/product-zx7-speaker/tablet/image-gallery-1.jpg'
import DesktopGridGallery1 from '/assets/product-zx7-speaker/desktop/image-gallery-1.jpg'
import MobileGridGallery2 from '/assets/product-zx7-speaker/mobile/image-gallery-2.jpg'
import TabletGridGallery2 from '/assets/product-zx7-speaker/tablet/image-gallery-2.jpg'
import DesktopGridGallery2 from '/assets/product-zx7-speaker/desktop/image-gallery-2.jpg'
import MobileGridGallery3 from '/assets/product-zx7-speaker/mobile/image-gallery-3.jpg'
import TabletGridGallery3 from '/assets/product-zx7-speaker/tablet/image-gallery-3.jpg'
import DesktopGridGallery3 from '/assets/product-zx7-speaker/desktop/image-gallery-3.jpg'
// recommendation imgs
import MobileRecomendation1 from '/assets/shared/mobile/image-zx9-speaker.jpg'
import TabletRecomendation1 from '/assets/shared/tablet/image-zx9-speaker.jpg'
import DesktopRecomendation1 from '/assets/shared/desktop/image-zx9-speaker.jpg'
import MobileRecomendation2 from '/assets/shared/mobile/image-xx99-mark-one-headphones.jpg'
import TabletRecomendation2 from '/assets/shared/tablet/image-xx99-mark-one-headphones.jpg'
import DesktopRecomendation2 from '/assets/shared/desktop/image-xx99-mark-one-headphones.jpg'
import MobileRecomendation3 from '/assets/shared/mobile/image-xx59-headphones.jpg'
import TabletRecomendation3 from '/assets/shared/tablet/image-xx59-headphones.jpg'
import DesktopRecomendation3 from '/assets/shared/desktop/image-xx59-headphones.jpg'

export const ZX7 = () => {
    const speakers = data[4]
    return (
        <main className="flex flex-col items-center px-6 md:px-10">
            <div className="w-full max-w-[1100px]">
                <ProductDetails
                    itemId={speakers.id}
                    newProduct={speakers.newProduct}
                    productTitle={speakers.productName}
                    mobileImg={speakers.imgs.mobile}
                    tabletImg={speakers.imgs.tablet}
                    desktopImg={speakers.imgs.desktop}
                    price={speakers.price}
                >
                    {speakers.description}
                </ProductDetails>
                <div className="mt-[88px] flex flex-col xl:flex-row xl:gap-[125px]">
                    <div className="xl:max-w-[635px]">
                        <h2 className="mb-6 text-mobileSubheader md:text-desktopSubheader">
                            FEATURES
                        </h2>
                        <p className="mb-6 text-p opacity-50">
                            Reap the advantages of a flat diaphragm tweeter
                            cone. This provides a fast response rate and
                            excellent high frequencies that lower tiered
                            bookshelf speakers cannot provide. The woofers are
                            made from aluminum that produces a unique and clear
                            sound. XLR inputs allow you to connect to a mixer
                            for more advanced usage.
                        </p>
                        <p className="text-p opacity-50">
                            The ZX7 speaker is the perfect blend of stylish
                            design and high performance. It houses an encased
                            MDF wooden enclosure which minimises acoustic
                            resonance. Dual connectivity allows pairing through
                            bluetooth or traditional optical and RCA input.
                            Switch input sources and control volume at your
                            finger tips with the included wireless remote. This
                            versatile speaker is equipped to deliver an
                            authentic listening experience.
                        </p>
                    </div>
                    <div className=" mt-[88px] flex flex-col md:flex-row xl:mt-0 xl:grow xl:flex-col">
                        <h2 className="mb-6 text-mobileSubheader md:grow md:text-desktopSubheader xl:grow-0">
                            IN THE BOX
                        </h2>
                        <div className="flex flex-col gap-2 md:grow">
                            <span className="flex flex-row gap-6 text-nude-200">
                                2x
                                <p className="text-p text-black opacity-50">
                                    Speaker Unit
                                </p>
                            </span>
                            <span className="flex flex-row gap-6 text-nude-200">
                                2x
                                <p className="text-p text-black opacity-50">
                                    Speaker Cloth Panel
                                </p>
                            </span>
                            <span className="flex flex-row gap-6 text-nude-200">
                                1x
                                <p className="text-p text-black opacity-50">
                                    User Manual
                                </p>
                            </span>
                            <span className="flex flex-row gap-6 text-nude-200">
                                1x
                                <p className="text-p text-black opacity-50">
                                    3.5mm 10m Audio Cable
                                </p>
                            </span>
                            <span className="flex flex-row gap-6 text-nude-200">
                                1x
                                <p className="text-p text-black opacity-50">
                                    7.5m Optical Cable
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
                {/* product imgs grid*/}
                <ProductGridImgs
                    DesktopGridGallery1={DesktopGridGallery1}
                    TabletGridGallery1={TabletGridGallery1}
                    MobileGridGallery1={MobileGridGallery1}
                    DesktopGridGallery2={DesktopGridGallery2}
                    TabletGridGallery2={TabletGridGallery2}
                    MobileGridGallery2={MobileGridGallery2}
                    DesktopGridGallery3={DesktopGridGallery3}
                    TabletGridGallery3={TabletGridGallery3}
                    MobileGridGallery3={MobileGridGallery3}
                />
            </div>
            <ProductRecommend
                ProductOne="ZX9 SPEAKER"
                MobileRecomendation1={MobileRecomendation1}
                TabletRecomendation1={TabletRecomendation1}
                DesktopRecomendation1={DesktopRecomendation1}
                FirstLink="/speakers/zx9"
                ProductTwo="XX99 MARK I"
                MobileRecomendation2={MobileRecomendation2}
                TabletRecomendation2={TabletRecomendation2}
                DesktopRecomendation2={DesktopRecomendation2}
                SecondLink="/headphones/xx99-mk1"
                ProductThree="XX59"
                MobileRecomendation3={MobileRecomendation3}
                TabletRecomendation3={TabletRecomendation3}
                DesktopRecomendation3={DesktopRecomendation3}
                ThirdLink="/headphones/xx59"
            />
            <div className="mt-[100px] flex w-full flex-col items-center">
                <DropdownMenu isDropDown={false} />
                <ModelGear />
            </div>
        </main>
    )
}
