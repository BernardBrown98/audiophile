// components
import { ItemCounter } from '../interactables/ItemCounter'
// data
import data from '../../data/products.json'
// context
import { useShoppingCart } from '../../context/ShoppingCartContext'
// utility
import { formatCurrency } from '../../utilities/formatCurrency'
// svgs
import { ReactComponent as Plus } from '../../svgs/plus.svg'

interface CartItemProps {
    id: number
    summary?: boolean
}

export const CartItem = ({ id, summary }: CartItemProps) => {
    const { removeFromCart, getQuantity } = useShoppingCart()
    const item = data[id - 1]
    return (
        <div className="flex flex-row items-center">
            <img
                className=" mr-4 h-[64px] rounded-lg object-cover"
                src={item.imgs.cart}
                alt="cart product img"
            />
            <div className="mr-auto flex flex-col">
                <h4 className="text-p font-[700]">{item.cartName}</h4>
                <p className="text-p font-bold opacity-50">
                    {formatCurrency(item.price)}
                </p>
            </div>
            {!summary && (
                <div className="mr-1 flex cursor-pointer flex-row stroke-black">
                    <ItemCounter id={item.id} price={item.price} isCart />
                    <Plus
                        onClick={() => removeFromCart(id)}
                        className="ml-2 rotate-45 self-center opacity-50 hover:stroke-nude-200 hover:opacity-100"
                    />
                </div>
            )}
            {summary && (
                <p className="text-p font-[700] opacity-50">
                    x{getQuantity(id, 'que')}
                </p>
            )}
        </div>
    )
}
