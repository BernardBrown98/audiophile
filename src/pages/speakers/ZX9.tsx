// components
import { ProductDetails } from '../../components/product-details/ProductDetails'
import { DropdownMenu } from '../../components/DropdownMenu'
import { ModelGear } from '../../components/ModelGear'
import { ProductGridImgs } from '../../components/product-details/ProductGridImgs'
import { ProductRecommend } from '../../components/product-details/ProductRecommend'

// data
import data from '../../data/products.json'

// grid imgs
import MobileGridGallery1 from '/assets/product-zx9-speaker/mobile/image-gallery-1.jpg'
import TabletGridGallery1 from '/assets/product-zx9-speaker/tablet/image-gallery-1.jpg'
import DesktopGridGallery1 from '/assets/product-zx9-speaker/desktop/image-gallery-1.jpg'
import MobileGridGallery2 from '/assets/product-zx9-speaker/mobile/image-gallery-2.jpg'
import TabletGridGallery2 from '/assets/product-zx9-speaker/tablet/image-gallery-2.jpg'
import DesktopGridGallery2 from '/assets/product-zx9-speaker/desktop/image-gallery-2.jpg'
import MobileGridGallery3 from '/assets/product-zx9-speaker/mobile/image-gallery-3.jpg'
import TabletGridGallery3 from '/assets/product-zx9-speaker/tablet/image-gallery-3.jpg'
import DesktopGridGallery3 from '/assets/product-zx9-speaker/desktop/image-gallery-3.jpg'
// recommendation imgs
import MobileRecomendation1 from '/assets/shared/mobile/image-zx7-speaker.jpg'
import TabletRecomendation1 from '/assets/shared/tablet/image-zx7-speaker.jpg'
import DesktopRecomendation1 from '/assets/shared/desktop/image-zx7-speaker.jpg'
import MobileRecomendation2 from '/assets/shared/mobile/image-xx99-mark-one-headphones.jpg'
import TabletRecomendation2 from '/assets/shared/tablet/image-xx99-mark-one-headphones.jpg'
import DesktopRecomendation2 from '/assets/shared/desktop/image-xx99-mark-one-headphones.jpg'
import MobileRecomendation3 from '/assets/shared/mobile/image-xx59-headphones.jpg'
import TabletRecomendation3 from '/assets/shared/tablet/image-xx59-headphones.jpg'
import DesktopRecomendation3 from '/assets/shared/desktop/image-xx59-headphones.jpg'

export const ZX9 = () => {
    const speakers = data[3]
    return (
        <main className="flex flex-col items-center px-6 md:px-10">
            <div className="w-full max-w-[1100px]">
                <ProductDetails
                    id={speakers.id}
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
                            Connect via Bluetooth or nearly any wired source.
                            This speaker features optical, digital coaxial, USB
                            Type-B, stereo RCA, and stereo XLR inputs, allowing
                            you to have up to five wired source devices
                            connected for easy switching. Improved bluetooth
                            technology offers near lossless audio quality at up
                            to 328ft (100m).
                        </p>
                        <p className="text-p opacity-50">
                            Discover clear, more natural sounding highs than the
                            competition with ZX9’s signature planar diaphragm
                            tweeter. Equally important is its powerful
                            room-shaking bass courtesy of a 6.5” aluminum alloy
                            bass unit. You’ll be able to enjoy equal sound
                            quality whether in a large room or small den.
                            Furthermore, you will experience new sensations from
                            old songs since it can respond to even the subtle
                            waveforms.
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
                                    10m Optical Cable
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
                ProductOne="ZX7 SPEAKER"
                MobileRecomendation1={MobileRecomendation1}
                TabletRecomendation1={TabletRecomendation1}
                DesktopRecomendation1={DesktopRecomendation1}
                FirstLink="/speakers/zx7"
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
