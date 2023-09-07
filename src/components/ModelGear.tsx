// model imgs
import MobileModel from '/assets/shared/mobile/image-best-gear.jpg'
import TabletModel from '/assets/shared/tablet/image-best-gear.jpg'
import DesktopModel from '/assets/shared/desktop/image-best-gear.jpg'

export const ModelGear = () => {
    return (
        <div className="mb-24 flex w-full max-w-[1100px] flex-col md:mb-[200px] xl:flex-row xl:gap-6">
            <picture className="w-full xl:order-last xl:w-1/2">
                <source srcSet={DesktopModel} media="(min-width: 1280px)" />
                <source srcSet={TabletModel} media="(min-width: 768px)" />
                <img
                    src={MobileModel}
                    className="h-[300px] w-full rounded-lg object-cover xl:h-[588px]"
                    alt="model wearing audiophile headphones"
                />
            </picture>
            <div className="self-center text-center xl:w-1/2  xl:text-start">
                <h3 className="mx-auto mb-8 mt-10 max-w-[384px] text-subHeader md:mt-16 md:text-tabletSubHeader xl:m-[0px_auto_32px_0px] xl:mr-auto xl:max-w-[300px]">
                    BRINGING YOU THE <span className="text-nude-200">BEST</span>{' '}
                    AUDIO GEAR
                </h3>
                <p className="max-w-[573px] text-p opacity-50 xl:max-w-[445px]">
                    Located at the heart of New York City, Audiophile is the
                    premier store for high end headphones, earphones, speakers,
                    and audio accessories. We have a large showroom and luxury
                    demonstration rooms available for you to browse and
                    experience a wide range of our products. Stop by our store
                    to meet some of the fantastic people who make Audiophile the
                    best place to buy your portable audio equipment.
                </p>
            </div>
        </div>
    )
}
