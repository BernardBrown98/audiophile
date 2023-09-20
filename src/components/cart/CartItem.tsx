// components
import { ItemCounter } from '../interactables/ItemCounter'
// data
import data from '../../data/products.json'
import { useShoppingCart } from '../../context/ShoppingCartContext'
// svgs
import { ReactComponent as Plus } from '../../svgs/plus.svg'

interface CartItemProps {
    id: number
}

export const CartItem = ({ id }: CartItemProps) => {
    const item = data[id - 1]
    const { getQuantity } = useShoppingCart()
    return (
        <div className="flex flex-row items-center">
            <img
                className=" mr-4 h-[64px] rounded-lg object-cover"
                src={item.imgs.cart}
                alt="cart product img"
            />
            <div className="mr-auto flex flex-col">
                <h4 className="text-p ">{item.cartName}</h4>
                <p className="text-p font-bold opacity-50">{item.price}</p>
            </div>
            <div className="flex cursor-pointer flex-row stroke-black">
                <ItemCounter id={item.id} quantity={getQuantity(id)} isCart />
                <Plus className="ml-1 rotate-45 self-center" />
            </div>
        </div>
    )
}
