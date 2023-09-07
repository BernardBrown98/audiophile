// hooks
import { useState } from 'react'
// svgs
import { ReactComponent as Subtract } from '../../svgs/subtract.svg'
import { ReactComponent as Plus } from '../../svgs/plus.svg'

export const ItemCounter = () => {
    const [count, setCount] = useState(1)
    const handleCount = (operator: 'add' | 'sub') => {
        // exit function if user tries to go below the count of 1
        if (count === 1 && operator === 'sub') return
        operator === 'add'
            ? setCount((prevCount) => prevCount + 1)
            : setCount((prevCount) => prevCount - 1)
    }
    return (
        <div className="flex items-center justify-center bg-offWhite-100 p-[15.5px] text-shop">
            <Subtract
                onClick={() => handleCount('sub')}
                className="mr-[21px] cursor-pointer opacity-50 transition-all ease-in-out hover:fill-nude-200 hover:opacity-100"
            />
            <span>{count}</span>
            <Plus
                onClick={() => handleCount('add')}
                className="ml-[21px] cursor-pointer stroke-black opacity-50 transition-all ease-in-out hover:stroke-nude-200 hover:opacity-100"
            />
        </div>
    )
}
