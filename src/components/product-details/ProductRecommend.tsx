// router component
import { Link } from 'react-router-dom'

interface ProductRecommendProps {
    MobileRecomendation1: string
    TabletRecomendation1: string
    DesktopRecomendation1: string
    MobileRecomendation2: string
    TabletRecomendation2: string
    DesktopRecomendation2: string
    MobileRecomendation3: string
    TabletRecomendation3: string
    DesktopRecomendation3: string
    FirstLink: string
    SecondLink: string
    ThirdLink: string
    ProductOne: String
    ProductTwo: String
    ProductThree: String
}

export const ProductRecommend = ({
    MobileRecomendation1,
    TabletRecomendation1,
    DesktopRecomendation1,
    MobileRecomendation2,
    TabletRecomendation2,
    DesktopRecomendation2,
    MobileRecomendation3,
    TabletRecomendation3,
    DesktopRecomendation3,
    FirstLink,
    SecondLink,
    ThirdLink,
    ProductOne,
    ProductTwo,
    ProductThree,
}: ProductRecommendProps) => {
    return (
        <section className="mt-[120px] flex w-full max-w-[1100px] flex-col items-center md:mt-[120px] xl:mt-[160px]">
            <h2 className="mb-10 text-mobileSubheader md:grow md:text-desktopSubheader xl:grow-0">
                YOU MAY ALSO LIKE
            </h2>
            <div className="flex w-full flex-col gap-14 md:flex-row md:gap-[11px] xl:gap-[30px]">
                <div className=" flex w-full flex-col items-center">
                    <picture className="flex h-[120px] w-full flex-col items-center justify-center rounded-lg bg-offWhite-300 md:h-[318px]">
                        <source
                            srcSet={DesktopRecomendation1}
                            media="(min-width: 1280px)"
                        />
                        <source
                            srcSet={TabletRecomendation1}
                            media="(min-width: 768px)"
                        />
                        <img
                            className="h-[95px] w-auto rounded-lg object-cover md:h-[300px]"
                            src={MobileRecomendation1}
                            alt="category card img"
                        />
                    </picture>
                    <h3 className="mt-8 text-recommendation md:mt-10">
                        {ProductOne}
                    </h3>
                    <div className="mt-8 flex flex-col items-center text-center">
                        <Link
                            to={FirstLink}
                            className="bg-nude-200 px-[31.5px] py-[15px] text-shop text-white transition-all ease-in-out hover:bg-nude-100"
                        >
                            SEE PRODUCT
                        </Link>
                    </div>
                </div>
                <div className="flex w-full flex-col items-center">
                    <picture className="flex h-[120px] w-full flex-col items-center justify-center rounded-lg bg-offWhite-300 md:h-[318px]">
                        <source
                            srcSet={DesktopRecomendation2}
                            media="(min-width: 1280px)"
                        />
                        <source
                            srcSet={TabletRecomendation2}
                            media="(min-width: 768px)"
                        />
                        <img
                            className="h-[95px] w-auto rounded-lg object-cover md:h-[300px]"
                            src={MobileRecomendation2}
                            alt="category card img"
                        />
                    </picture>
                    <h3 className="mt-8 text-recommendation md:mt-10">
                        {ProductTwo}
                    </h3>
                    <div className="mt-8 flex flex-col items-center text-center">
                        <Link
                            to={SecondLink}
                            className="bg-nude-200 px-[31.5px] py-[15px] text-shop text-white transition-all ease-in-out hover:bg-nude-100"
                        >
                            SEE PRODUCT
                        </Link>
                    </div>
                </div>
                <div className="flex w-full flex-col items-center">
                    <picture className="flex h-[120px] w-full flex-col items-center justify-center rounded-lg bg-offWhite-300 md:h-[318px]">
                        <source
                            srcSet={DesktopRecomendation3}
                            media="(min-width: 1280px)"
                        />
                        <source
                            srcSet={TabletRecomendation3}
                            media="(min-width: 768px)"
                        />
                        <img
                            className="h-[95px] w-auto rounded-lg object-cover md:h-[300px]"
                            src={MobileRecomendation3}
                            alt="category card img"
                        />
                    </picture>
                    <h3 className="mt-8 text-recommendation md:mt-10">
                        {ProductThree}
                    </h3>
                    <div className="mt-8 flex flex-col items-center text-center">
                        <Link
                            to={ThirdLink}
                            className="bg-nude-200 px-[31.5px] py-[15px] text-shop text-white transition-all ease-in-out hover:bg-nude-100"
                        >
                            SEE PRODUCT
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
