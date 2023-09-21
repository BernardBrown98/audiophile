// hooks
import { useEffect, useState } from 'react'
// context
import { useShoppingCart } from '../../context/ShoppingCartContext'
// svgs
import { ReactComponent as Subtract } from '../../svgs/subtract.svg'
import { ReactComponent as Plus } from '../../svgs/plus.svg'

interface ItemCounterProps {
    id: number
    isCart?: boolean
    quantity?: number
}

export const ItemCounter = ({ id, isCart, quantity }: ItemCounterProps) => {
    const { increaseQuantity, getQuantity } = useShoppingCart()
    // const [initialCount, setInitialCount] = useState(1)

    const initialCount = getQuantity(id) ? getQuantity(id) : 1
    // const [initialCount, setInitialCount] = useState(1)
    const [count, setCount] = useState(initialCount)
    const handleCount = (operator: 'add' | 'sub') => {
        // exit function if user tries to go below the count of 1
        if (count === 1 && operator === 'sub') return
        operator === 'add'
            ? setCount((prevCount) => prevCount + 1)
            : setCount((prevCount) => prevCount - 1)
    }
    // {
    //     useEffect(() => {
    //         if (isCart) {
    //             setCount(getQuantity(id))
    //         }
    //     }, [getQuantity(id)])
    // }

    return (
        <>
            <div className="flex items-center justify-center bg-offWhite-100 p-[15.5px] text-shop">
                <Subtract
                    onClick={() => handleCount('sub')}
                    className="mr-[21px] cursor-pointer stroke-black opacity-50 transition-all ease-in-out hover:fill-nude-200 hover:stroke-nude-200 hover:opacity-100"
                />
                <span>{count}</span>
                <Plus
                    onClick={() => handleCount('add')}
                    className="ml-[21px] cursor-pointer stroke-black opacity-50 transition-all ease-in-out hover:stroke-nude-200 hover:opacity-100"
                />
            </div>
            {!isCart && (
                <button
                    className="bg-nude-200 px-[31.5px] py-[15px] text-shop text-white transition-all ease-in-out hover:bg-nude-100"
                    onClick={() => increaseQuantity(id, count)}
                >
                    ADD TO CART
                </button>
            )}
        </>
    )
}
