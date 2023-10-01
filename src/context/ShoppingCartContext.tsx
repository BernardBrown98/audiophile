import { ReactNode, createContext, useContext, useState } from 'react'

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext = {
    getQuantity: (id: number, cart: 'cart' | 'que') => number
    cartCount: () => number
    increaseQuantity: (id: number, amount: number) => void
    decreaseQuantity: (id: number) => void
    addToCart: (id: number, amount: number) => void
    removeFromCart: (id: number) => void
    removeAllFromCart: () => void
    cartItems: CartItem[]
    commonItems: CartItem[]
    queCartItems: CartItem[]
}

type CartItem = {
    id: number
    quantity: number
}

const CartContext = createContext({} as ShoppingCartContext)

export const useShoppingCart = () => {
    return useContext(CartContext)
}

export const ShoppingCartProvider = ({
    children,
}: ShoppingCartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [queCartItems, setQueCartItems] = useState<CartItem[]>([])
    const [commonItems, setCommonItems] = useState<CartItem[]>([])
    // console.log(cartItems.length)
    const getQuantity = (id: number, cart: 'cart' | 'que') => {
        return cart === 'cart'
            ? cartItems.find((item) => item.id === id)?.quantity || 1
            : queCartItems.find((item) => item.id === id)?.quantity || 1
    }
    // const increaseQuantity = (id: number, amount: number) => {
    //     setCartItems((currItems) => {
    //         const didFindItem =
    //             currItems.find((item) => item.id === id) !== undefined
    //         if (!didFindItem) {
    //             return [...currItems, { id, quantity: amount }]
    //         }
    //         // const updatedItems = [...currItems]
    //         return currItems.map((item) =>
    //             item.id === id
    //                 ? { ...item, quantity: item.quantity + amount }
    //                 : item
    //         )
    //     })
    const increaseQuantity = (id: number, amount: number) => {
        setQueCartItems((currItems) => {
            const didFindItem =
                currItems.find((item) => item.id === id) !== undefined
            if (!didFindItem) {
                return [...currItems, { id, quantity: amount === 1 ? 2 : 1 }]
            }
            // const updatedItems = [...currItems]
            return currItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + amount }
                    : item
            )
        })
    }
    const decreaseQuantity = (id: number) => {
        setQueCartItems((currItems) => {
            console.log(currItems, id)
            return currItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
        })
    }

    // const addToCart = (id: number, amount: number) => {
    //     setCartItems((currItems) => {
    //         return currItems.map((item) =>
    //             item.id === id ? { ...item, quantity: amount } : item
    //         )
    //     })
    // }
    const addToCart = (id: number, amount: number) => {
        setCartItems(() => {
            return queCartItems.find((item) => item.id === id) === undefined
                ? [...queCartItems, { id, quantity: amount }]
                : queCartItems
        })
    }

    const removeFromCart = (id: number) => {
        setCartItems((currItems) => {
            return currItems.filter((item) => item.id !== id)
        })
    }

    const removeAllFromCart = () => {
        setCartItems([])
        setQueCartItems([])
    }
    // FIXXXXX THISSSS!!!!!!!!!!!!!!!!!!!!!!!
    const cartCount = () => {
        // setCommonItems(() => {
        //     return queCartItems.filter((item) => {
        //         let id = item.id
        //         return cartItems.length <= 1
        //             ? cartItems
        //             : cartItems.some((umm) => umm.id === id)
        //     })
        // })

        // setCommonItems(() => {
        //     return queCartItems.filter((item) => {
        //         const id = item.id
        //         return cartItems.length <= 1
        //             ? cartItems
        //             : cartItems.some((item) => item.id === id)
        //     })
        // })
        console.log('loaded')

        const commonItems = queCartItems.filter((item) => {
            const id = item.id
            return cartItems.length === 1
                ? cartItems
                : cartItems.some((item) => item.id === id)
        })
        console.log('cart items', cartItems)
        console.log('common items', commonItems)

        return commonItems.reduce((item, cur) => item + cur.quantity, 0)
        // return cartItems.reduce((item, cur) => item + cur.quantity, 0)
    }

    return (
        <CartContext.Provider
            value={{
                getQuantity,
                increaseQuantity,
                decreaseQuantity,
                addToCart,
                removeFromCart,
                removeAllFromCart,
                cartCount,
                cartItems,
                commonItems,
                queCartItems,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
