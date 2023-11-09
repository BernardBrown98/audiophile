// context
import { useShoppingCart } from '../../context/ShoppingCartContext'
// hooks
import { useNavigate } from 'react-router-dom'
// components
import { CartItem } from '../cart/CartItem'
// utilities
import { formatCurrency } from '../../utilities/formatCurrency'
// svg
import Check from '../../svgs/icon-order-confirmation.svg'
import { useState } from 'react'

interface OrderConfirmationProps {
    isActiveSummary: boolean
    handleClick: () => void
}

export const OrderConfirmation = ({
    isActiveSummary,
    handleClick,
}: OrderConfirmationProps) => {
    const { cartItems, cartUtilities, removeAllFromCart } = useShoppingCart()
    const [isActive, setIsActive] = useState(false)
    const navigate = useNavigate()
    return (
        <div
            className={`fixed left-[24px] top-1/2 z-50 w-[calc(100%-48px)] max-w-[540px] -translate-y-1/2 flex-col rounded-lg bg-white p-8 min-[588px]:left-1/2 min-[588px]:-translate-x-1/2 md:p-12 ${
                !isActiveSummary ? 'hidden' : 'flex'
            }`}
        >
            <img
                className="mb-[23px] self-start md:mb-[33px]"
                src={Check}
                alt="orange circle with check in the middle"
            />
            <h3 className="mb-4 text-mobileSubheader leading-7 md:mb-6 md:text-desktopSubheader">
                THANK YOU <br /> FOR YOUR ORDER
            </h3>
            <p className="mb-6 text-p opacity-50 md:mb-[33px]">
                You will receive an email confirmation shortly.
            </p>
            <div className="flex flex-col md:flex-row">
                <section className="flex max-h-[256px] grow flex-col overflow-y-auto rounded-lg rounded-b-none bg-[#F1F1F1] px-6 pt-6 md:rounded-b-lg md:rounded-r-none">
                    {!isActive
                        ? cartItems.slice(0, 1).map((item) => (
                              <div className="mb-2">
                                  <CartItem
                                      id={item.id}
                                      key={item.id}
                                      summary
                                  />
                              </div>
                          ))
                        : cartItems.map((item) => (
                              <CartItem id={item.id} key={item.id} summary />
                          ))}
                    {cartItems.length - 1 !== 0 && (
                        <>
                            <div className="mb-3 mt-2 h-[1px] bg-black opacity-[0.08]"></div>
                            <button
                                className="mb-[25px] cursor-pointer text-center text-label opacity-50"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setIsActive((prev) => !prev)
                                }}
                            >
                                {!isActive
                                    ? `and ${
                                          cartItems.length - 1
                                      } other item(s)`
                                    : 'View less'}
                            </button>
                        </>
                    )}
                </section>
                <div className="flex grow flex-col gap-2 rounded-lg rounded-t-none bg-black p-[15px_24px_19px] text-white md:justify-center md:rounded-l-none md:rounded-t-lg md:rounded-tl-none">
                    <p className="text-p opacity-50">GRAND TOTAL</p>
                    <p className=" text-price">
                        {formatCurrency(cartUtilities('grandTotal'))}
                    </p>
                </div>
            </div>
            <button
                onClick={() => {
                    navigate('/')
                    handleClick()
                    removeAllFromCart()
                }}
                className="mt-6 w-full bg-nude-200 py-[15px] text-shop text-white transition-all ease-in-out hover:bg-nude-100 md:mt-[46px]"
            >
                BACK TO HOME
            </button>
        </div>
    )
}
