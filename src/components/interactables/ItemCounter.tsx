// hooks
import { useState } from 'react'

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
        <div className="flex justify-center bg-offWhite-100 p-[15.5px] text-shop ">
            <span
                onClick={() => handleCount('sub')}
                className="mr-[21px] cursor-pointer rounded-[50%] px-[6px] opacity-25 hover:bg-[rgb(220,220,220)] hover:text-nude-200 hover:opacity-100"
            >
                -
            </span>
            <span>{count}</span>
            <span
                onClick={() => handleCount('add')}
                className="ml-[21px] cursor-pointer rounded-[50%] px-[4px] opacity-25 hover:bg-[rgb(220,220,220)] hover:text-nude-200 hover:opacity-100"
            >
                +
            </span>
        </div>
    )
}
