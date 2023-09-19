// router hooks
import { useNavigate } from 'react-router-dom'
// components
import { ItemCounter } from '../interactables/ItemCounter'
// context
import { useShoppingCart } from '../../context/ShoppingCartContext'
// utility functions
import { formatCurrency } from '../../utilities/formatCurrency'

interface ProductDetailsProps {
    itemId: number
    children: React.ReactNode
    newProduct?: boolean
    productTitle: string
    mobileImg: string
    tabletImg: string
    desktopImg: string
    price: number
}

export const ProductDetails = ({
    itemId,
    children,
    newProduct,
    productTitle,
    mobileImg,
    tabletImg,
    desktopImg,
    price,
}: ProductDetailsProps) => {
    const navigate = useNavigate()
    const { increaseQuantity } = useShoppingCart()
    return (
        <>
            <p
                onClick={() => navigate(-1)}
                className="mb-6 mt-4 cursor-pointer text-p opacity-50 md:mt-[33px] xl:mb-14 xl:mt-[79px]"
            >
                Go Back
            </p>
            <div className="flex w-full flex-col md:flex-row md:gap-[69px] xl:gap-[125px]">
                <picture className="flex w-full flex-col items-center justify-center rounded-lg bg-offWhite-300 md:w-[40%] xl:w-1/2">
                    <source srcSet={desktopImg} media="(min-width: 1280px)" />
                    <source srcSet={tabletImg} media="(min-width: 768px)" />
                    <img
                        className="w-auto rounded-lg object-cover"
                        src={mobileImg}
                        alt="Product img"
                    />
                </picture>
                <div className="mt-8 flex flex-col items-start md:mt-[52px] md:justify-center xl:mt-0 xl:w-1/2">
                    {newProduct && (
                        <h2 className="mb-6 max-w-[384px] text-newProduct text-nude-200 md:mb-4">
                            NEW PRODUCT
                        </h2>
                    )}
                    <h3 className="mb-6 max-w-[384px] whitespace-pre-wrap text-subHeader md:mb-8 md:text-tabletSubHeader xl:max-w-[300px]">
                        {productTitle}
                    </h3>
                    <p className="mb-6 max-w-[573px] text-p opacity-50 xl:mb-10 xl:max-w-[445px]">
                        {children}
                    </p>
                    <p className="text-price">{formatCurrency(price)}</p>
                    <div className="mt-[31px] flex flex-row gap-4 xl:mt-[47px]">
                        <ItemCounter />
                        <button
                            className="bg-nude-200 px-[31.5px] py-[15px] text-shop text-white transition-all ease-in-out hover:bg-nude-100"
                            onClick={() => increaseQuantity(itemId)}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
