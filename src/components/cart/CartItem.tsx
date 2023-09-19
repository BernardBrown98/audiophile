// components
import { ItemCounter } from '../interactables/ItemCounter'
// data
import data from '../../data/products.json'

interface CartItemProps {
    id: number
}

export const CartItem = ({ id }: CartItemProps) => {
    const item = data[id - 1]
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
            <ItemCounter />
        </div>
    )
}
