import { useShoppingCart } from '../../context/ShoppingCartContext'
import { CartItem } from '../cart/CartItem'
import { formatCurrency } from '../../utilities/formatCurrency'
export const Summary = () => {
    const { cartItems, cartUtilities } = useShoppingCart()

    return (
        <div className=" mt-8 flex w-full max-w-[1100px] flex-col rounded-lg bg-white p-[32px_24px] shadow-lg md:px-8">
            <div className="flex flex-row justify-between">
                <h3 className="mb-[30px] text-price">SUMMARY</h3>
            </div>
            <section className="flex max-h-[256px] flex-col gap-8 overflow-y-auto">
                {cartItems.map((item) => (
                    <CartItem id={item.id} key={item.id} summary />
                ))}
            </section>

            <div className="mt-8 flex flex-row justify-between">
                <p className="text-p opacity-50">TOTAL</p>
                <p className="text-p font-bold">
                    {formatCurrency(cartUtilities('price'))}
                </p>
            </div>
            <button className="mt-6 w-full bg-nude-200 py-[15px] text-shop text-white transition-all ease-in-out hover:bg-nude-100">
                CONTINUE & PAY
            </button>
        </div>
    )
}
