import { ReactNode, createContext, useContext, useState } from 'react'

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext = {
    getQuantity: (id: number, cart: 'cart' | 'que') => number
    cartUtilities: (utility: 'count' | 'price' | 'vat' | 'grandTotal') => number
    increaseQuantity: (id: number, amount: number, price: number) => void
    decreaseQuantity: (id: number) => void
    addToCart: (id: number, amount: number, price: number) => void
    removeFromCart: (id: number) => void
    removeAllFromCart: () => void
    cartItems: CartItem[]
    queCartItems: CartItem[]
}

type CartItem = {
    id: number
    quantity: number
    price: number
}

const CartContext = createContext({} as ShoppingCartContext)

export const useShoppingCart = () => {
    return useContext(CartContext)
}

export const ShoppingCartProvider = ({
    children,
}: ShoppingCartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        { id: 2, quantity: 2, price: 250 },
        { id: 2, quantity: 2, price: 250 },
        { id: 2, quantity: 2, price: 250 },
    ])
    const [queCartItems, setQueCartItems] = useState<CartItem[]>([
        { id: 2, quantity: 2, price: 250 },
        { id: 2, quantity: 2, price: 250 },
        { id: 2, quantity: 2, price: 250 },
    ])
    const getQuantity = (id: number, cart: 'cart' | 'que') => {
        return cart === 'cart'
            ? cartItems.find((item) => item.id === id)?.quantity || 1
            : queCartItems.find((item) => item.id === id)?.quantity || 1
    }
    const increaseQuantity = (id: number, amount: number, price: number) => {
        setQueCartItems((currItems) => {
            const didFindItem =
                currItems.find((item) => item.id === id) !== undefined
            if (!didFindItem) {
                return [
                    ...currItems,
                    { id, price, quantity: amount === 1 ? 2 : 1 },
                ]
            }
            return currItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + amount }
                    : item
            )
        })
    }

    const decreaseQuantity = (id: number) => {
        let lessThanZero: CartItem | undefined
        setQueCartItems((currItems) => {
            lessThanZero = currItems.find((item) => item.quantity <= 1)
            if (lessThanZero !== undefined) {
                return currItems.filter((item) => item.id !== lessThanZero?.id)
            }
            return currItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
        })
        setCartItems((currItems) => {
            if (lessThanZero !== undefined) {
                return currItems.filter((item) => item.id !== lessThanZero?.id)
            }
            return currItems
        })
    }

    const addToCart = (id: number, amount: number, price: number) => {
        if (queCartItems.find((item) => item.id === id) === undefined)
            setQueCartItems(() => {
                return [...queCartItems, { id, price, quantity: amount }]
            })
        setCartItems(() => {
            return queCartItems.find((item) => item.id === id) === undefined
                ? [...queCartItems, { id, price, quantity: amount }]
                : queCartItems
        })
    }

    const removeFromCart = (id: number) => {
        setCartItems((currItems) => {
            return currItems.filter((item) => item.id !== id)
        })
        setQueCartItems((currItems) => {
            return currItems.map((item) => {
                return item.id === id ? { ...item, quantity: 1 } : item
            })
        })
    }

    const removeAllFromCart = () => {
        setCartItems([])
        setQueCartItems([])
    }

    const cartUtilities = (
        utility: 'count' | 'price' | 'vat' | 'grandTotal'
    ) => {
        const commonItems = queCartItems.filter((item) => {
            const id = item.id
            if (cartItems.length >= 1)
                return cartItems.some((item) => item.id === id)
        })
        const price = commonItems.reduce(
            (item, cur) => item + cur.price * cur.quantity,
            0
        )
        if (utility === 'count')
            return commonItems.reduce((item, cur) => item + cur.quantity, 0)
        else if (utility === 'price') return price
        else if (utility === 'vat') return price * 0.2
        else return price + 50

        // return utility === 'count'
        //     ? commonItems.reduce((item, cur) => item + cur.quantity, 0)
        //     : commonItems.reduce(
        //           (item, cur) => item + cur.price * cur.quantity,
        //           0
        //       )
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
                cartUtilities,
                cartItems,
                queCartItems,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
