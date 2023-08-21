// router hooks
import { useNavigate } from 'react-router-dom'
// components
import { ItemCounter } from './interactables/ItemCounter'

interface ProductDetailsProps {
    children: React.ReactNode
    newProduct?: true
    productTitle: string
    mobileImg: string
    tabletImg: string
    desktopImg: string
    price: number
}

export const ProductDetails = ({
    children,
    newProduct,
    productTitle,
    mobileImg,
    tabletImg,
    desktopImg,
    price,
}: ProductDetailsProps) => {
    const navigate = useNavigate()
    return (
        <>
            <p
                onClick={() => navigate(-1)}
                className="mb-6 mt-4 cursor-pointer text-p opacity-50 md:mt-[33px] xl:mb-14 xl:mt-[79px]"
            >
                Go Back
            </p>
            <div className="flex w-full flex-col xl:flex-row xl:gap-[125px]">
                <picture className="flex w-full flex-col items-center rounded-lg bg-offWhite-300 xl:w-1/2">
                    <source srcSet={desktopImg} media="(min-width: 1280px)" />
                    <source srcSet={tabletImg} media="(min-width: 768px)" />
                    <img
                        className="h-[352px] w-auto rounded-lg object-cover xl:h-[560px]"
                        src={mobileImg}
                        alt="Product img"
                    />
                </picture>
                <div className="mt-8 flex flex-col items-start md:mt-[52px] xl:mt-0 xl:w-1/2  xl:justify-center">
                    {newProduct && (
                        <h2 className="mb-6 max-w-[384px] text-newProduct text-nude-200 md:mb-4">
                            NEW PRODUCT
                        </h2>
                    )}
                    <h3 className="mb-6 max-w-[384px] text-subHeader md:mb-8 md:text-tabletSubHeader xl:max-w-[300px]">
                        {productTitle}
                    </h3>
                    <p className="mb-6 max-w-[573px] text-p opacity-50 xl:mb-10 xl:max-w-[445px]">
                        {children}
                    </p>
                    <p className="text-price">
                        {'$ ' + price.toLocaleString()}
                    </p>
                    <div className="mt-[31px] flex flex-row gap-4 xl:mt-[47px]">
                        <ItemCounter />
                        <button className="bg-nude-200 px-[31.5px] py-[15px] text-shop text-white transition-all ease-in-out hover:bg-nude-100">
                            SEE PRODUCT
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
