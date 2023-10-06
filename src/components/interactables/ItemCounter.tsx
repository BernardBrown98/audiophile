// context
import { useShoppingCart } from '../../context/ShoppingCartContext'
// svgs
import { ReactComponent as Subtract } from '../../svgs/subtract.svg'
import { ReactComponent as Plus } from '../../svgs/plus.svg'

interface ItemCounterProps {
    id: number
    price: number
    isCart?: boolean
}

// export const ItemCounter = ({ id, isCart }: ItemCounterProps) => {
//     const { increaseQuantity, cartItems } = useShoppingCart()
//     const initalItemAmount =
//         cartItems.find((item) => item.id === id)?.quantity || 1
//     const [itemAmount, setItemAmount] = useState(initalItemAmount)

//     useEffect(() => {
//         setItemAmount(cartItems.find((item) => item.id === id)?.quantity || 1)
//     }, [cartItems])

//     return (
//         <>
//             <div className="flex items-center justify-center bg-offWhite-100 p-[15.5px] text-shop">
//                 <Subtract
//                     // onClick={() => handleCount('sub')}
//                     className="mr-[21px] cursor-pointer stroke-black opacity-50 transition-all ease-in-out hover:fill-nude-200 hover:stroke-nude-200 hover:opacity-100"
//                 />
//                 <span>{itemAmount}</span>
//                 <Plus
//                     onClick={() => increaseQuantity(id, 1)}
//                     className="ml-[21px] cursor-pointer stroke-black opacity-50 transition-all ease-in-out hover:stroke-nude-200 hover:opacity-100"
//                 />
//             </div>
//             {!isCart && (
//                 <button
//                     className="bg-nude-200 px-[31.5px] py-[15px] text-shop text-white transition-all ease-in-out hover:bg-nude-100"
//                     onClick={() => increaseQuantity(id, itemAmount)}
//                 >
//                     ADD TO CART
//                 </button>
//             )}
//         </>
//     )
// }
export const ItemCounter = ({ id, isCart, price }: ItemCounterProps) => {
    const { increaseQuantity, getQuantity, addToCart, decreaseQuantity } =
        useShoppingCart()
    console.log(id)
    console.log(price)
    return (
        <>
            <div className="flex items-center justify-center bg-offWhite-100 p-[15.5px] text-shop">
                <Subtract
                    onClick={() => decreaseQuantity(id)}
                    className="mr-[21px] cursor-pointer stroke-black opacity-50 transition-all ease-in-out hover:fill-nude-200 hover:stroke-nude-200 hover:opacity-100"
                />
                <span>{getQuantity(id, 'que')}</span>
                <Plus
                    onClick={() => increaseQuantity(id, 1, price!)}
                    className="ml-[21px] cursor-pointer stroke-black opacity-50 transition-all ease-in-out hover:stroke-nude-200 hover:opacity-100"
                />
            </div>
            {!isCart && (
                <button
                    className="bg-nude-200 px-[31.5px] py-[15px] text-shop text-white transition-all ease-in-out hover:bg-nude-100"
                    onClick={() =>
                        addToCart(id, getQuantity(id, 'que'), price!)
                    }
                >
                    ADD TO CART
                </button>
            )}
        </>
    )
}
