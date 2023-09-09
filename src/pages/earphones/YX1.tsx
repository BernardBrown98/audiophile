// components
import { ProductDetails } from '../../components/product-details/ProductDetails'
import { DropdownMenu } from '../../components/DropdownMenu'
import { ModelGear } from '../../components/ModelGear'
import { ProductGridImgs } from '../../components/product-details/ProductGridImgs'
import { ProductRecommend } from '../../components/product-details/ProductRecommend'
// data
import data from '../../data/products.json'
// grid imgs
import MobileGridGallery1 from '/assets/product-yx1-earphones/mobile/image-gallery-1.jpg'
import TabletGridGallery1 from '/assets/product-yx1-earphones/tablet/image-gallery-1.jpg'
import DesktopGridGallery1 from '/assets/product-yx1-earphones/desktop/image-gallery-1.jpg'
import MobileGridGallery2 from '/assets/product-yx1-earphones/mobile/image-gallery-2.jpg'
import TabletGridGallery2 from '/assets/product-yx1-earphones/tablet/image-gallery-2.jpg'
import DesktopGridGallery2 from '/assets/product-yx1-earphones/desktop/image-gallery-2.jpg'
import MobileGridGallery3 from '/assets/product-yx1-earphones/mobile/image-gallery-3.jpg'
import TabletGridGallery3 from '/assets/product-yx1-earphones/tablet/image-gallery-3.jpg'
import DesktopGridGallery3 from '/assets/product-yx1-earphones/desktop/image-gallery-3.jpg'
// recommendation imgs
import MobileRecomendation1 from '/assets/shared/mobile/image-xx99-mark-one-headphones.jpg'
import TabletRecomendation1 from '/assets/shared/tablet/image-xx99-mark-one-headphones.jpg'
import DesktopRecomendation1 from '/assets/shared/desktop/image-xx99-mark-one-headphones.jpg'
import MobileRecomendation2 from '/assets/shared/mobile/image-xx59-headphones.jpg'
import TabletRecomendation2 from '/assets/shared/tablet/image-xx59-headphones.jpg'
import DesktopRecomendation2 from '/assets/shared/desktop/image-xx59-headphones.jpg'
import MobileRecomendation3 from '/assets/shared/mobile/image-zx9-speaker.jpg'
import TabletRecomendation3 from '/assets/shared/tablet/image-zx9-speaker.jpg'
import DesktopRecomendation3 from '/assets/shared/desktop/image-zx9-speaker.jpg'

export const YX1 = () => {
    const earphones = data[5]
    return (
        <main className="flex flex-col items-center px-6 md:px-10">
            <div className="w-full max-w-[1100px]">
                <ProductDetails
                    newProduct={earphones.newProduct}
                    productTitle={earphones.productName}
                    mobileImg={earphones.imgs.mobile}
                    tabletImg={earphones.imgs.tablet}
                    desktopImg={earphones.imgs.desktop}
                    price={earphones.price}
                >
                    {earphones.description}
                </ProductDetails>
                <div className="mt-[88px] flex flex-col xl:flex-row xl:gap-[125px]">
                    <div className="xl:max-w-[635px]">
                        <h2 className="mb-6 text-mobileSubheader md:text-desktopSubheader">
                            FEATURES
                        </h2>
                        <p className="mb-6 text-p opacity-50">
                            Experience unrivalled stereo sound thanks to
                            innovative acoustic technology. With improved
                            ergonomics designed for full day wearing, these
                            revolutionary earphones have been finely crafted to
                            provide you with the perfect fit, delivering
                            complete comfort all day long while enjoying
                            exceptional noise isolation and truly immersive
                            sound.
                        </p>
                        <p className="text-p opacity-50">
                            The YX1 Wireless Earphones features customizable
                            controls for volume, music, calls, and voice
                            assistants built into both earbuds. The new 7-hour
                            battery life can be extended up to 28 hours with the
                            charging case, giving you uninterrupted play time.
                            Exquisite craftsmanship with a splash resistant
                            design now available in an all new white and grey
                            color scheme as well as the popular classic black.
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
                                    Earphone Unit
                                </p>
                            </span>
                            <span className="flex flex-row gap-6 text-nude-200">
                                6x
                                <p className="text-p text-black opacity-50">
                                    Multi-size Earplugs
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
                                    USB-C Charging Cable
                                </p>
                            </span>
                            <span className="flex flex-row gap-6 text-nude-200">
                                1x
                                <p className="text-p text-black opacity-50">
                                    Travel Pouch
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
                ProductOne="XX99 MARK I"
                MobileRecomendation1={MobileRecomendation1}
                TabletRecomendation1={TabletRecomendation1}
                DesktopRecomendation1={DesktopRecomendation1}
                FirstLink="/headphones/xx99-mk1"
                ProductTwo="XX59"
                MobileRecomendation2={MobileRecomendation2}
                TabletRecomendation2={TabletRecomendation2}
                DesktopRecomendation2={DesktopRecomendation2}
                SecondLink="/headphones/xx59"
                ProductThree="ZX9 SPEAKER"
                MobileRecomendation3={MobileRecomendation3}
                TabletRecomendation3={TabletRecomendation3}
                DesktopRecomendation3={DesktopRecomendation3}
                ThirdLink="/speakers/zx9"
            />
            <div className="mt-[100px] flex w-full flex-col items-center">
                <DropdownMenu isDropDown={false} />
                <ModelGear />
            </div>
        </main>
    )
}
