import clsx from 'clsx'
// hooks
import { useNavigate } from 'react-router-dom'
// components
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { CartItem } from './CartItem'
import { formatCurrency } from '../../utilities/formatCurrency'

interface CartProps {
    isActiveCart: boolean
    handleClick: (element: 'cart') => void
}

export const Cart = ({ isActiveCart, handleClick }: CartProps) => {
    const navigate = useNavigate()
    const cartClasses = clsx(
        'fixed top-[113px] z-50 flex min-h-[486px] w-full flex-col items-center px-6 md:px-10',
        {
            hidden: !isActiveCart,
        }
    )
    const { cartItems, removeAllFromCart, cartUtilities } = useShoppingCart()
    const count =
        cartUtilities('count') > 0 ? `(${cartUtilities('count')})` : ''

    const handleNavigate = () => {
        console.log('hello')
        navigate('/checkout')
        handleClick('cart')
    }
    return (
        <div className={cartClasses}>
            <div className="flex w-full max-w-[1100px] flex-col items-center md:items-end">
                <div className="h-full w-full max-w-[377px] rounded-lg bg-white px-[28px]">
                    <div className="mb-8 mt-8 flex flex-row justify-between">
                        <h3 className="text-price">{`CART ${count}`}</h3>
                        {cartItems.length > 1 && (
                            <p
                                className="cursor-pointer text-p underline opacity-50 hover:text-nude-200 hover:opacity-100"
                                onClick={() => removeAllFromCart()}
                            >
                                Remove all
                            </p>
                        )}
                    </div>
                    <section className="flex max-h-[256px] flex-col gap-8 overflow-y-auto">
                        {cartItems.map((item) => (
                            <CartItem id={item.id} key={item.id} />
                        ))}
                    </section>

                    <div className="mt-8 flex flex-row justify-between">
                        <p className="text-p opacity-50">TOTAL</p>
                        <p className="text-p font-bold">
                            {formatCurrency(cartUtilities('price'))}
                        </p>
                    </div>
                    <button
                        onClick={handleNavigate}
                        className="mb-[31px] mt-6 w-full bg-nude-200 py-[15px] text-shop text-white transition-all ease-in-out hover:bg-nude-100"
                    >
                        CONTINUE
                    </button>
                </div>
            </div>
        </div>
    )
}
