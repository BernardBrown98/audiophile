// context
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { useHandleClick } from '../../layout/Layout'
// components
import { CartItem } from '../cart/CartItem'
// utilities
import { formatCurrency } from '../../utilities/formatCurrency'

interface SummaryProps {
    buttonVisibility: boolean
    isEMoney: boolean
}

export const Summary = ({ isEMoney, buttonVisibility }: SummaryProps) => {
    const { cartItems, cartUtilities } = useShoppingCart()
    const { handleClick } = useHandleClick()
    return (
        <div className="mt-8 flex w-full max-w-[1100px] flex-col rounded-lg bg-white p-[32px_24px] shadow-lg  md:px-8 xl:mt-0 xl:max-w-[350px] xl:last:self-start">
            <div className="flex flex-row justify-between">
                <h3 className="mb-[30px] text-price">SUMMARY</h3>
            </div>
            <section className="flex max-h-[256px] flex-col gap-8 overflow-y-auto">
                {cartItems.map((item) => (
                    <CartItem id={item.id} key={item.id} summary />
                ))}
            </section>
            <div className="mt-8 flex flex-col gap-2">
                <div className=" flex flex-row justify-between">
                    <p className="text-p opacity-50">TOTAL</p>
                    <p className=" text-price font-bold tracking-[normal]">
                        {formatCurrency(cartUtilities('price'))}
                    </p>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="text-p opacity-50">SHIPPING</p>
                    <p className=" text-price font-bold tracking-[normal]">
                        $50
                    </p>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="text-p opacity-50">VAT (INCLUDED)</p>
                    <p className=" text-price font-bold tracking-[normal]">
                        {formatCurrency(cartUtilities('vat'))}
                    </p>
                </div>
                <div className="mt-4 flex flex-row justify-between">
                    <p className="text-p opacity-50">GRAND TOTAL</p>
                    <p className=" text-price font-bold tracking-[normal] text-nude-200">
                        {formatCurrency(cartUtilities('grandTotal'))}
                    </p>
                </div>
            </div>
            <button
                className={`mt-6 w-full py-[15px] text-shop text-white transition-all ease-in-out hover:bg-nude-100 ${
                    !buttonVisibility ? ' bg-nude-100' : 'bg-nude-200'
                }`}
                disabled={!buttonVisibility}
                onClick={() => {
                    handleClick('summary')
                    window.scrollTo(0, 0)
                }}
            >
                {isEMoney ? 'CONTINUE & PAY' : 'CONTINUE'}
            </button>
        </div>
    )
}
