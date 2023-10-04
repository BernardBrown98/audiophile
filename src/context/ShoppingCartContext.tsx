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
    // console.log(cartItems.length)
    const getQuantity = (id: number, cart: 'cart' | 'que') => {
        return cart === 'cart'
            ? cartItems.find((item) => item.id === id)?.quantity || 1
            : queCartItems.find((item) => item.id === id)?.quantity || 1
    }
    const increaseQuantity = (id: number, amount: number) => {
        setQueCartItems((currItems) => {
            const didFindItem =
                currItems.find((item) => item.id === id) !== undefined
            if (!didFindItem) {
                return [...currItems, { id, quantity: amount === 1 ? 2 : 1 }]
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
                console.log(lessThanZero.id)
                return currItems.filter((item) => item.id !== lessThanZero?.id)
            }
            return currItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
        })
        setCartItems((currItems) => {
            if (lessThanZero !== undefined) {
                console.log(lessThanZero.id)
                return currItems.filter((item) => item.id !== lessThanZero?.id)
            }
            return currItems
        })
    }

    const addToCart = (id: number, amount: number) => {
        if (queCartItems.find((item) => item.id === id) === undefined)
            setQueCartItems(() => {
                return [...queCartItems, { id, quantity: amount }]
            })
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

    const cartCount = () => {
        console.log('loaded')
        const commonItems = queCartItems.filter((item) => {
            const id = item.id
            if (cartItems.length >= 1)
                return cartItems.some((item) => item.id === id)
        })
        console.log('cart items', cartItems)
        console.log('common items', commonItems)

        return commonItems.reduce((item, cur) => item + cur.quantity, 0)
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
                queCartItems,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
