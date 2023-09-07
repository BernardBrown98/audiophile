// components
import { ProductDetails } from '../../components/product-details/ProductDetails'
import { DropdownMenu } from '../../components/DropdownMenu'
import { ModelGear } from '../../components/ModelGear'
import { ProductGridImgs } from '../../components/product-details/ProductGridImgs'
import { ProductRecommend } from '../../components/product-details/ProductRecommend'
// product imgs
import Mobile from '/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg'
import Tablet from '/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg'
import Desktop from '/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'
// grid imgs
import MobileGridGallery1 from '/assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg'
import TabletGridGallery1 from '/assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg'
import DesktopGridGallery1 from '/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg'
import MobileGridGallery2 from '/assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg'
import TabletGridGallery2 from '/assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg'
import DesktopGridGallery2 from '/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg'
import MobileGridGallery3 from '/assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg'
import TabletGridGallery3 from '/assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg'
import DesktopGridGallery3 from '/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg'
// recommendation imgs
import MobileRecomendation1 from '/assets/shared/mobile/image-xx99-mark-two-headphones.jpg'
import TabletRecomendation1 from '/assets/shared/tablet/image-xx99-mark-two-headphones.jpg'
import DesktopRecomendation1 from '/assets/shared/desktop/image-xx99-mark-two-headphones.jpg'
import MobileRecomendation2 from '/assets/shared/mobile/image-xx59-headphones.jpg'
import TabletRecomendation2 from '/assets/shared/tablet/image-xx59-headphones.jpg'
import DesktopRecomendation2 from '/assets/shared/desktop/image-xx59-headphones.jpg'
import MobileRecomendation3 from '/assets/shared/mobile/image-zx7-speaker.jpg'
import TabletRecomendation3 from '/assets/shared/tablet/image-zx7-speaker.jpg'
import DesktopRecomendation3 from '/assets/shared/desktop/image-zx7-speaker.jpg'

export const XX99MarkI = () => {
    return (
        <main className="flex flex-col items-center px-6 md:px-10">
            <div className="w-full max-w-[1100px]">
                <ProductDetails
                    newProduct
                    productTitle="XX99 Mark I Headphones"
                    mobileImg={Mobile}
                    tabletImg={Tablet}
                    desktopImg={Desktop}
                    price={1750}
                >
                    As the gold standard for headphones, the classic XX99 Mark I
                    offers detailed and accurate audio reproduction for
                    audiophiles, mixing engineers, and music aficionados alike
                    in studios and on the go.
                </ProductDetails>
                <div className="mt-[88px] flex flex-col xl:flex-row xl:gap-[125px]">
                    <div className="xl:max-w-[635px]">
                        <h2 className="mb-6 text-mobileSubheader md:text-desktopSubheader">
                            FEATURES
                        </h2>
                        <p className="mb-6 text-p opacity-50">
                            As the headphones all others are measured against,
                            the XX99 Mark I demonstrates over five decades of
                            audio expertise, redefining the critical listening
                            experience. This pair of closed-back headphones are
                            made of industrial, aerospace-grade materials to
                            emphasize durability at a relatively light weight of
                            11 oz.
                        </p>
                        <p className="text-p opacity-50">
                            From the handcrafted microfiber ear cushions to the
                            robust metal headband with inner damping element,
                            the components work together to deliver comfort and
                            uncompromising sound. Its closed-back design
                            delivers up to 27 dB of passive noise cancellation,
                            reducing resonance by reflecting sound to a
                            dedicated absorber. For connectivity, a specially
                            tuned cable is included with a balanced gold
                            connector.
                        </p>
                    </div>
                    <div className=" mt-[88px] flex flex-col md:flex-row xl:mt-0 xl:grow xl:flex-col">
                        <h2 className="mb-6 text-mobileSubheader md:grow md:text-desktopSubheader xl:grow-0">
                            IN THE BOX
                        </h2>
                        <div className="flex flex-col gap-2 md:grow">
                            <span className="flex flex-row gap-6 text-nude-200">
                                1x
                                <p className="text-p text-black opacity-50">
                                    Headphone Unit
                                </p>
                            </span>
                            <span className="flex flex-row gap-6 text-nude-200">
                                2x
                                <p className="text-p text-black opacity-50">
                                    Replacement Earcups
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
                                    3.5mm 5m Audio Cable
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
                ProductOne="XX99 Mark II"
                MobileRecomendation1={MobileRecomendation1}
                TabletRecomendation1={TabletRecomendation1}
                DesktopRecomendation1={DesktopRecomendation1}
                FirstLink="/headphones/xx99-mk2"
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
